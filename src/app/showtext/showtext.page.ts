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
    this.firstName = this.result.FirstName;
    this.lastName = this.result.LastName;
    this.email = this.result.Email;
    this.company = this.result.Company;
    this.city = this.result.City;
    this.state = this.result.State;
    this.country = this.result.Country;
    this.street = this.result.Street;
    this.zip = this.result.Zip;
    this.phone = this.result.Phone;
    this.website = this.result.Website;
  }

  handleFirstNameValue(event) {
    this.firstName = event.target.value;
  }

  handleLastNameValue(event) {
    this.lastName = event.target.value;
  }

  handleEmailAddress(event) {
    this.email = event.target.value;
  }

  handleCompanyName(event) {
    this.company = event.target.value;
  }

  handleStreet(event) {
    this.street = event.target.value;
  }

  handleCity(event) {
    this.city = event.target.value;
  }

  handleState(event) {
    this.state = event.target.value;
  }

  handleCountry(event) {
    this.country = event.target.value;
  }
  handleZip(event) {
    this.zip = event.target.value;
  }
  handlePhone(event) {
    this.phone = event.target.value;
  }
  handleWebsite(event) {
    this.website = event.target.value;
  }

  async saveLead() {
    console.log("before posting lead to salesforce");
    const loading = await this.loadingController.create({
        message: 'Saving Lead...',
        translucent: true
      });

      await loading.present();

      
      this.web2lead.saveLead("00D3i000000v9Fx",this.firstName, this.lastName, this.company, this.phone, this.state, this.street,this.zip, this.country, this.city, this.email).subscribe(async (result) => {
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

  processForm(event) {
    event.preventDefault();
    this.saveLead();
  }
}