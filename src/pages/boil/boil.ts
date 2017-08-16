import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { AddfoodPage } from '../addfood/addfood';
import { StorePage } from '../store/store';
import { CookPage } from '../cook/cook';
/**
 * Generated class for the BoilPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-boil',
  templateUrl: 'boil.html',
 
})
export class BoilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  gotoaddfood() {
    this.navCtrl.push(AddfoodPage);}
  gotostore() {
    this.navCtrl.push(StorePage);}
  gotocook() {
     this.navCtrl.push(CookPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad BoilPage');
  }

}
