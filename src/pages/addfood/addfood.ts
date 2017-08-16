import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { CurryPage } from '../curry/curry';
import { AddNutritionPage } from '../add-nutrition/add-nutrition';
/**
 * Generated class for the AddfoodPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-addfood',
  templateUrl: 'addfood.html',
})
export class AddfoodPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
    

   gotocurry() {
    this.navCtrl.push(CurryPage);}
   gotoAdmin() {
    this.navCtrl.push(AddNutritionPage);}

   
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddfoodPage');
  }

}
