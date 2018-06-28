import { of } from 'rxjs/observable/of';
import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/filter';
import { ListMail, IListMail } from './@core/data/listmail';
import { Injectable } from '@angular/core';
import { catchError, map, tap, filter } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ListmailService {
  readonly ROOT_URL = "https://demoemailweb.azurewebsites.net/api"
  

  emails: Observable<any>;
  constructor(private http: HttpClient) { }

  createMail(mailto: string, Messages: String,Subject:string, UserID: string) {

    const myheader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    });

    return this.http.post<any>(`${this.ROOT_URL}/savemail`,{Subject,mailto,Messages,UserID},{headers: myheader} );
  
 }
  
  deleteEmail(id:number) {
    if (confirm('Are you sure you want to delete this?')) {
      return this.http.delete<any>(`${this.ROOT_URL}/EMAILS/${id}`,httpOptions).pipe(
        tap(value => value),
        catchError(error => of([])
        ));
    }
      
  }

  getData(username): Observable<any>{
    // return this.http.get<any>(this.ROOT_URL).subscribe(value => {this.emails=value});
    return this.http.get<any>(`${this.ROOT_URL}/getmail/${username}`).pipe(
      tap(value => value),
      catchError(error => of([])
      )
    );
  }
}