import { Component } from '@angular/core';
import { NavController, NavParams,AlertController,ToastController } from 'ionic-angular';
import { RegisterServiceProvider} from './../../providers/register-service/register-service';
import { Observable } from 'rxjs/Observable';


import { CategoryPage } from '../category/category';
import { HomePage } from '../home/home';
//import mongoose from 'mongoose';
/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  users: Observable<any>;
 

  constructor(public navCtrl: NavController, public navParams: NavParams, public RegisterServiceProvider: RegisterServiceProvider, public alertCtrl: AlertController, public toastCtrl: ToastController)
  { this.loadUsers(); }

  loadUsers() {
    this.users = this.RegisterServiceProvider.getUsers();
  }

  gotocategory() {
     this.navCtrl.push(CategoryPage);
    let prompt = this.alertCtrl.create({
    title: 'สมัครสมาชิก',
      message: "สมัครสมาชิกเรียบร้อยแล้วค่ะ/ครับ!"
    });
    prompt.present();
  }
    

      /*
      inputs: [
        {
          name: 'text',
          placeholder: 'email'
        },
        {
          name: 'text',
          placeholder: 'name'
        },
        {
          name: 'text',
          placeholder: 'password'
        },
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data => {
            this.RegisterServiceProvider.addUser(data.text).subscribe(data => {
              //this.showToast(data.msg);
              this.loadUsers();
            });
          }
        }
      ]
    });
    prompt.present();
  }

  */

  
  gotohome() {
    this.navCtrl.push(HomePage);}
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
