import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = environment.api;
   constructor(private _http:HttpClient) { }

  // formControls() {
  //   console.log(this.baseUrl);
  //   return this._http.get<any>(`${this.baseUrl}/adminLoginForm`);
  // }


  LoginAdmin(){
    return this._http.get<any>(`${this.baseUrl}/adminData`);
  }
}
