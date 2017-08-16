import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { AddfoodPage } from '../addfood/addfood';
import { StorePage } from '../store/store';
/**
 * Generated class for the RicePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-rice',
  templateUrl: 'rice.html',
})
export class RicePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  gotoaddfood() {
    this.navCtrl.push(AddfoodPage);}
  gotostore() {
    this.navCtrl.push(StorePage);}
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad RicePage');
  }

}
