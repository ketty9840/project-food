import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { AddfoodPage } from '../addfood/addfood';
import { NutritionPage } from '../nutrition/nutrition';
/**
 * Generated class for the CookPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-cook',
  templateUrl: 'cook.html',
})
export class CookPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  gotoaddfood() {
    this.navCtrl.push(AddfoodPage);}

  gotonutrition() {
    this.navCtrl.push(NutritionPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CookPage');
  }

}
