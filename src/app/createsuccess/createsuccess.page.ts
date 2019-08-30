import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HomePage } from '../home/home.page';


@Component({
  selector: 'app-createsuccess',
  templateUrl: './createsuccess.page.html',
  styleUrls: ['./createsuccess.page.scss'],
})

export class CreatesuccessPage implements OnInit {
  homepage: HomePage;

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  gotoHomePage(){
    this.navCtrl.navigateBack('/home');
  }

}
