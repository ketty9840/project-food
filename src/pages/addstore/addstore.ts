import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { StorePage } from '../store/store';
/**
 * Generated class for the AddstorePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-addstore',
  templateUrl: 'addstore.html',
})
export class AddstorePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  gotostore() {
    this.navCtrl.push(StorePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddstorePage');
  }

}
