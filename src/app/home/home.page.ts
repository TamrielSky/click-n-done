import { Component } from '@angular/core';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { GoogleCloudVisionServiceService } from '../google-cloud-vision-service.service';
import { Router, NavigationExtras } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(
  	private camera: Camera,
  	private vision: GoogleCloudVisionServiceService,
  	private route : Router,
  	public loadingController: LoadingController
  ) {}

  ionViewDidEnter() {
    this.takePhoto();
  }

  async takePhoto() {
  	const options: CameraOptions = {
  		quality: 100,
  		targetHeight: 500,
  		targetWidth: 500,
  		destinationType: this.camera.DestinationType.DATA_URL,
  		encodingType: this.camera.EncodingType.JPEG,
  		mediaType: this.camera.MediaType.PICTURE,
	  }
  

    this.camera.getPicture(options).then(async (imageData) => {

    	const loading = await this.loadingController.create({
    		message: 'Getting Results...',
        translucent: true
    	});

      await loading.present();

      this.vision.getLabels(imageData,"TEXT_DETECTION").subscribe(async (result) => {
        console.log(result.json())
        let navigationExtras: NavigationExtras = {
          queryParams: {
            special: JSON.stringify(imageData),
            result : JSON.stringify(result.json()),
            feature : JSON.stringify("TEXT_DETECTION")
          }
        };

        this.route.navigate(["showtext"],navigationExtras)
        await loading.dismiss()
      }, err => {
        console.log(err);
      });
    }, err => {
      console.log(err);
    });
  }
}