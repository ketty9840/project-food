import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CurryPage } from '../curry/curry';
import { BoilPage } from '../boil/boil';
import { FriedPage } from '../fried/fried';
import { PuffPage } from '../puff/puff';
import { RicePage } from '../rice/rice';
import { ChiliPage } from '../chili/chili';
import { StorePage } from '../store/store';
/**
 * Generated class for the CategoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  gotocurry() {
    this.navCtrl.push(CurryPage);}
  gotoboil() {
    this.navCtrl.push(BoilPage);}
  gotofried() {
    this.navCtrl.push(FriedPage);}
  gotopuff() {
    this.navCtrl.push(PuffPage);}
  gotorice() {
    this.navCtrl.push(RicePage);}
  gotochili() {
    this.navCtrl.push(ChiliPage);}
  gotostore() {
    this.navCtrl.push(StorePage);}  



  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }

}
