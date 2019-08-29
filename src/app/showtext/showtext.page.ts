import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SalesforceWebtoleadServiceService } from '../salesforce-webtolead-service.service';
import { LoadingController } from '@ionic/angular';
​
@Component({
  selector: 'app-showtext',
  templateUrl: './showtext.page.html',
  styleUrls: ['./showtext.page.scss'],
})
export class ShowtextPage implements OnInit {
  result:any
  firstName:any
  lastName:any
  email:any
  company:any
  city:any
  state:any
  country:any
  street:any
  zip:any
  phone:any
  website:any
​
constructor(
  private route: ActivatedRoute, 
  private router: Router,
  private web2lead: SalesforceWebtoleadServiceService,
  public loadingController: LoadingController
  ) {}
​
  ngOnInit() {
  	// this.route.queryParams.subscribe(params => {
      //     if (params && params.special && params.result && params.feature ) {
      //         this.image = JSON.parse(params.special);
      //         this.result = JSON.parse(params.result);
      //         this.feature = JSON.parse(params.feature);
      //     }
      //     this.result = this.result.responses[0].textAnnotations
      // });
      this.route.queryParams.subscribe(params => {
          if (params && params.result) {
              this.result = JSON.parse(params.result);
              this.getIntializeData();
          }
      });
  }

  getIntializeData() {
    this.firstName = this.result.first_name;
    this.lastName = this.result.last_name;
    this.email = this.result.email;
    this.company = this.result.company;
    this.city = this.result.city;
    this.state = this.result.state;
    this.country = this.result.country;
    this.street = this.result.street;
    this.zip = this.result.zip;
    this.phone = this.result.phone;
    this.website = this.result.website;
  }

  async saveLead() {
    event.preventDefault();
    console.log("before posting lead to salesforce");
    const loading = await this.loadingController.create({
        message: 'Saving Lead...',
        translucent: true
      });

      await loading.present();

      this.web2lead.saveLead("00D3i000000v9Fx",this.firstName, this.lastName, this.company, this.phone, this.state, this.street,this.zip, this.country, this.city, this.email).subscribe(async (result) => {

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
}