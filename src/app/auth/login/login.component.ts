import { Router } from '@angular/router';
import { UsersService } from './../../user.service';
import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import {  HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  isLoginError: boolean = false;
  Users: Observable<any>;
  constructor(private userService: UsersService,private router: Router) { }
  checkLogin(username:string,password:string){
    this.userService.userAuthentication(username,password).subscribe((data:any)=>{
      localStorage.setItem('userToken',data.access_token);
      console.log(data);
      this.router.navigate(['/pages']);
    },(err: HttpErrorResponse)=>{
      this.isLoginError=true;
      console.log(err);
    }
    );
    // if(username==="admin"&&password==="admin"){
    //   alert("Welcom Admin!");
      
    //   this.router.navigate(['/pages']);
      
    // }
    //  else{
    //   alert("Wrong username/password!");
    // }
  }

  ngOnInit() {
  }

}
