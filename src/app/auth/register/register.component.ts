import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../user.service';
import { Directive, forwardRef, Attribute,OnChanges, SimpleChanges,Input } from '@angular/core';
import { NG_VALIDATORS,Validator,Validators,AbstractControl,ValidatorFn } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { IListUser } from '../../@core/data/listuser';
@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  ngOnInit() {
  }


  constructor(private userService: UsersService,private router:Router) { }
  registerUser(username,password,email,fullname){
  this.userService.registerUser(username,password,email,fullname).subscribe((data:any)=>{
    console.log(data);
    alert("Dang ki thanh cong");
    this.router.navigate['/login'];  
  },(err: HttpErrorResponse)=>{
    console.log(err);
  }
  );


  

};
}


