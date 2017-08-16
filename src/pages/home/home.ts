import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CategoryPage } from '../category/category';
import { StorePage } from '../store/store';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  
})
export class HomePage {


    
  constructor(public navCtrl: NavController) {

  }
  gotocategory() {
    this.navCtrl.push(CategoryPage);}
  gotostore() {
    this.navCtrl.push(StorePage);}
  gotoregister() {
    this.navCtrl.push(RegisterPage);}
  gotologin() {
    this.navCtrl.push(LoginPage);}
  
   
}
