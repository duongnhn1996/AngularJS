import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../user.service';
import { FormGroup } from '@angular/forms';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup;
  ngOnInit() {
   
  }
  recaptcha:string
  resolved(captchaResponse: string) {
    this.recaptcha=  captchaResponse;
  }
  errorMessages : string;
  constructor(private userService: UsersService,private router:Router) { }
  registerUser(username,password,email,fullname){
  this.userService.registerUser(username,password,email,fullname,this.recaptcha).subscribe(() => {
    alert("Dang ki thanh cong");
    this.router.navigate(['/login']);
  },(err: HttpErrorResponse)=>{
    this.errorMessages = err.error
    console.log(err.statusText);
  }
  );


  

};
}


