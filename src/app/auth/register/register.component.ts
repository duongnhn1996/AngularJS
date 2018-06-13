import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../user.service';
import { Directive, forwardRef, Attribute,OnChanges, SimpleChanges,Input } from '@angular/core';
import { NG_VALIDATORS,Validator,Validators,AbstractControl,ValidatorFn } from '@angular/forms';
@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 
  Users: Observable<any>;
  constructor(private userService: UsersService,private router:Router) { }
  register(username:string,password:string){
    this.userService.createUser(username,password).subscribe(value => {
       this.Users = value; 
       alert("Register Done!");
       this.router.navigate(['/login']); // change route
      
      });
  }
  ngOnInit() {
  }
  

}
