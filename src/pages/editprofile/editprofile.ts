import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CategoryPage } from '../category/category';
import { HomePage } from '../home/home';
/**
 * Generated class for the EditprofilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html',
})
export class EditprofilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  gotocategory() {
    this.navCtrl.push(CategoryPage);}
  gotohome() {
    this.navCtrl.push(HomePage);}
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditprofilePage');
  }

}
