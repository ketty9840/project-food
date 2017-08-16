import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';
import { HomePage } from '../pages/home/home';
import { StorePage } from '../pages/store/store';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { UserPage } from '../pages/user/user';
import { EditprofilePage } from '../pages/editprofile/editprofile';
import { CategoryPage } from '../pages/category/category';
import { CurryPage } from '../pages/curry/curry';
import { BoilPage } from '../pages/boil/boil';
import { FriedPage } from '../pages/fried/fried';
import { PuffPage } from '../pages/puff/puff';
import { RicePage } from '../pages/rice/rice';
import { ChiliPage } from '../pages/chili/chili';
import { AddfoodPage } from '../pages/addfood/addfood';
import { AddstorePage } from '../pages/addstore/addstore';
import { AddNutritionPage } from '../pages/add-nutrition/add-nutrition';
import { ContactPage } from '../pages/contact/contact'; 
import { DescriptionPage } from '../pages/description/description';
import { CookPage } from '../pages/cook/cook';
import { NutritionPage} from '../pages/nutrition/nutrition';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import mongoose from 'mongoose';
import { RegisterServiceProvider } from '../providers/register-service/register-service';
import  { HttpModule } from '@angular/http';
import { AppSettingsProvider } from '../providers/app-settings/app-settings';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    StorePage,
    RegisterPage,
    LoginPage,
    UserPage,
    EditprofilePage,
    CategoryPage,
    AddfoodPage,
    CurryPage,
    BoilPage,
    FriedPage,
    PuffPage,
    RicePage,
    ChiliPage,
    AddstorePage,
    AddNutritionPage,
    DescriptionPage,
    ContactPage,
    CookPage,
    NutritionPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    StorePage,
    RegisterPage,
    LoginPage,
    UserPage,
    EditprofilePage,
    CategoryPage,
    AddfoodPage,
    CurryPage,
    BoilPage,
    FriedPage,
    PuffPage,
    RicePage,
    ChiliPage,
    AddstorePage,
    AddNutritionPage,
    DescriptionPage,
    ContactPage,
    CookPage,
    NutritionPage
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RegisterServiceProvider,
    AppSettingsProvider,

  ]
})
export class AppModule {}
