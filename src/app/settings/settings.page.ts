import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  orgId:any;
  constructor(private storage: Storage) {
    this.orgId = "";
   }

  ngOnInit() {
  }
  async saveOrgId() {
    this.storage.set('orgId', this.orgId);
    console.log('org id  is', this.orgId);

  }
}
