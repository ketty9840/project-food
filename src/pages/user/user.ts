import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { EditprofilePage } from '../editprofile/editprofile';
/**
 * Generated class for the UserPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  gotoeditprofile() {
    this.navCtrl.push(EditprofilePage);}
  
  gotohome() {
    this.navCtrl.push(HomePage);}

 
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

}
