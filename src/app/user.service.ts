import { Appsetting } from './@core/data/config';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/filter';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import * as jwt_decode from "jwt-decode";
import { IUserLogin, IListUser, CreateUser } from './@core/data/listuser';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private http: HttpClient) { }
  
  userAuthentication(username,password): Observable<IUserLogin[]> {
    const myheader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      'Access-Control-Max-Age' : '1728000',
      "Authorization": "Basic " + btoa(username + ":" + password)
    });

    let body: HttpParams = new HttpParams(); 
    return this.http.post<IUserLogin[]>(`${Appsetting.ROOT_URL}/auth/token`,body,{headers: myheader});
    // return this.http.post<IUserLogin[]>(this.ROOT_URL+"/auth/token",body,{headers: myheader});
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

  registerUser(username,password,email,fullname,recaptcha): Observable<IListUser[]> {
    const myheader = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    var body = CreateUser({
      Username:username,
      Password:password,
      Fullname:fullname,
      Email:email,
      Recaptcha:recaptcha
    });
    return this.http.post<IListUser[]>(`${Appsetting.ROOT_URL}/user`, body, {headers:myheader});
  }

}
