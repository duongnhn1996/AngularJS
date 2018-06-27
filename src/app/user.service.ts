import { of } from 'rxjs/observable/of';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/filter';
import { ListMail } from './@core/data/listmail';
import { Injectable } from '@angular/core';
import { catchError, map, tap, filter } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import * as jwt_decode from "jwt-decode";
import { NbResetPasswordComponent } from '@nebular/auth';
import { URLSearchParams } from '@angular/http';
import { IListUser } from './@core/data/listuser';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  readonly ROOT_URL = "https://demoemailweb.azurewebsites.net/api"
  Users: Observable<any>;
  constructor(private http: HttpClient) { }
  // createUser(Username: string, Password: string) {
  //   const data: IListUser = {
  //     id: null,
  //     username: Username,
  //     password: Password
  //   }

  //   return this.http.post<any>(this.ROOT_URL, data);
  // }
  userAuthentication(userName,password){
    const myheader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      'Access-Control-Max-Age' : '1728000',
      "Authorization": "Basic " + btoa(userName + ":" + password)
    });

    let body: HttpParams = new HttpParams(); 
   
    return this.http.post(this.ROOT_URL+"/auth/token",body,{headers: myheader});
  }
  getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }
  
  getUserInfo(){
      var token =localStorage.getItem('userToken');
      var base64Url = token.split('.')[1];
      var base64 = base64Url.replace('-', '+').replace('_', '/');
      return JSON.parse(window.atob(base64));
  }

  registerUser(username,password,email,fullname,recaptcha){
    const myheader = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const body= {password,username,fullname,email,recaptcha}
    return this.http.post(`${this.ROOT_URL}/user`, body, {headers:myheader});
  }

}
