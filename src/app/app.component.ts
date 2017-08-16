import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';
import { UserPage } from '../pages/user/user';
import { CurryPage } from '../pages/curry/curry';
import { BoilPage } from '../pages/boil/boil';
import { FriedPage } from '../pages/fried/fried';
import { PuffPage } from '../pages/puff/puff';
import { RicePage } from '../pages/rice/rice';
import { ChiliPage } from '../pages/chili/chili';
import { StorePage } from '../pages/store/store';
import { AddfoodPage } from '../pages/addfood/addfood';
import { AddstorePage } from '../pages/addstore/addstore';
import { ContactPage } from '../pages/contact/contact'; 


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public menu: MenuController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      // { title: 'List', component: ListPage },
      { title: 'Home', component: HomePage },
      { title: 'ชื่อผู้ใช้', component: UserPage },
      { title: 'ประเภทแกง', component: CurryPage },
      { title: 'ประเภทต้ม', component: BoilPage },
      { title: 'ประเภททอด', component: FriedPage },
      { title: 'ประเภทผัด', component: PuffPage },
      { title: 'ประเภทข้าว', component: RicePage },
      { title: 'ประเภทน้ำพริก', component: ChiliPage },
      { title: 'ร้านอาหาร', component: StorePage },
      { title: 'เพิ่มสูตรอาหาร', component: AddfoodPage },
      { title: 'แนะนำร้านอาหาร', component: AddstorePage },
      { title: 'ติดต่อเรา', component: ContactPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.menu.toggle();
  }
}
