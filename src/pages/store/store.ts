import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AddstorePage } from '../addstore/addstore';
import { DescriptionPage } from '../description/description';
/**
 * Generated class for the StorePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-store',
  templateUrl: 'store.html',
})
export class StorePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  gotoaddstore() {
    this.navCtrl.push( AddstorePage);
  }
  gotomenu() {
     this.navCtrl.push( DescriptionPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad StorePage');
  }

}
