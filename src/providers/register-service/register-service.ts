import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AppSettingsProvider } from '../app-settings/app-settings';
import 'rxjs/add/operator/map';

/*
  Generated class for the RegisterServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class RegisterServiceProvider {

  apiUrl = this.AppSettingsProvider.getApiUrl();

  constructor(public http: Http, public AppSettingsProvider: AppSettingsProvider) {
    console.log('Hello RegisterServiceProvider Provider');
  }
   
  public getUsers() {
    return this.http.get(this.apiUrl + 'users')
      .map(response => response.json().result);
  }
 
  public addUser(newUser) {
    return this.http.post(this.apiUrl + 'users', { 'text': newUser })
      .map(response => response.json());
  }
}
 /* public deleteTodo(todoId) {
    return this.http.delete(this.apiUrl + 'todos/' + todoId)
      .map(response => response.json());
}
*/

