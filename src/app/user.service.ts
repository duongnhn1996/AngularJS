import { ListUser } from './@core/data/listuser';
import { of } from 'rxjs/observable/of';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/filter';
import { ListMail } from './@core/data/listmail';
import { Injectable } from '@angular/core';
import { catchError, map, tap, filter } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NbResetPasswordComponent } from '@nebular/auth';
import { URLSearchParams } from '@angular/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly ROOT_URL = "http://localhost:52044/api"
  Users: Observable<any>;
  constructor(private http: HttpClient) { }
  createUser(Username: string, Password: string) {
    const data: ListUser = {
      id: null,
      username: Username,
      password: Password
    }

    return this.http.post<any>(this.ROOT_URL, data);
  }
  userAuthentication(userName,password){
    
    var reqheader = new HttpHeaders({"Content-Type":"application/x-www-urlencoded",'Authorization':  'Basic ' +userName + ":" + password});
    return this.http.post(this.ROOT_URL+"/auth/token",{headers: reqheader});
  }
  checkUser(user: string, pass: string): Observable<any> {
    

    // return this.http.post<any>(this.ROOT_URL,{ username: user, password: pass }).pipe(
    //   tap(value => value),
    //   catchError(error => of([])
    //   )
    // );
    
    let header = new HttpHeaders();
    header.append("Authorization", "Basic " + btoa(user + ":" + pass)); 
    header.append("Content-Type", "application/x-www-form-urlencoded");
    return this.http.get(this.ROOT_URL,{headers:header});
    // .pipe(
    //     tap(value => value),
    //     catchError(error => of([])
    //     )
    //   );

  }

}
