import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SalesforceWebtoleadServiceService } from '../salesforce-webtolead-service.service';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-showtext',
  templateUrl: './showtext.page.html',
  styleUrls: ['./showtext.page.scss'],
})
export class ShowtextPage implements OnInit {
  image:any
  result:any
  feature:any


  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private web2lead: SalesforceWebtoleadServiceService,
    public loadingController: LoadingController
    ) {}

  async saveLead() {
    console.log("before posting lead to salesforce");
    const loading = await this.loadingController.create({
        message: 'Saving Lead...',
        translucent: true
      });

      await loading.present();


      this.web2lead.saveLead("ning", "liu", "salesforce","4158665251","California","Decoto Road","94112","US","San Francisco", "nliu@salesforce.com").subscribe(async (result) => {
        console.log(result.json())
        /*
        let navigationExtras: NavigationExtras = {
          queryParams: {
            special: JSON.stringify(imageData),
            result : JSON.stringify(result.json()),
            feature : JSON.stringify("TEXT_DETECTION")
          }
        };
        */
        this.router.navigate(["createsuccess"])
        await loading.dismiss()
      }, err => {
        console.log(err);
      });

  }

  ngOnInit() {
  	this.route.queryParams.subscribe(params => {
		if (params && params.special && params.result && params.feature ) {
			this.image = JSON.parse(params.special);
			this.result = JSON.parse(params.result);
			this.feature = JSON.parse(params.feature);
		}
		this.result = this.result.responses[0].textAnnotations
  	});
  }

}
