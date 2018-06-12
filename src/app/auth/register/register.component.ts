import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../user.service';
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
