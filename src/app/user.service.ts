import { of } from 'rxjs/observable/of';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/filter';
import { ListMail } from './@core/data/listmail';
import { Injectable } from '@angular/core';
import { catchError, map, tap, filter } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { NbResetPasswordComponent } from '@nebular/auth';
import { URLSearchParams } from '@angular/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  readonly ROOT_URL = "http://localhost:52044/api"
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
      'Content-Type': 'application/x-www-form-urlencoded',
      "Authorization": "Basic " + btoa(userName + ":" + password)
    });

    let body: HttpParams = new HttpParams(); // require

    return this.http.post(this.ROOT_URL+"/auth/token",body,{headers: myheader});
  }

  getUserInfo(){
   return this.http.get(this.ROOT_URL+"/getUserInfo",{
      headers: new HttpHeaders({
        'Authorization':'Bearer '+ localStorage.getItem('userToken')
      })
    });
  }

}
