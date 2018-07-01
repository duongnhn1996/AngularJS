import { Appsetting } from './@core/data/config';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/filter';
import { IListMail, IDELETE_MAIL } from './@core/data/listmail';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ListmailService {

  emails: Observable<any>;
  constructor(private http: HttpClient) { }

  createMail(mailto: string, Messages: String,Subject:string, UserID: string) {

    const myheader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    });

    return this.http.post<any>(`${Appsetting.ROOT_URL}/savemail`,{Subject,mailto,Messages,UserID},{headers: myheader} );
  
 }
  
  deleteEmail(id:number): Observable<IDELETE_MAIL[]> {
    if (confirm('Are you sure you want to delete this?')) {
      return this.http.delete<IDELETE_MAIL[]>(`${Appsetting.ROOT_URL}/EMAILS/${id}`,httpOptions).pipe(
        tap(value => value),
        catchError(() => of([])
        ));
    }
      
  }

  getData(username): Observable<IListMail[]>{
    return this.http.get<IListMail[]>(`${Appsetting.ROOT_URL}/getmail/${username}`).pipe(
      tap(value => value),
      catchError(() => of([])
      )
    );
  }
}