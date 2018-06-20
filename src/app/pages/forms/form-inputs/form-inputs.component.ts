import { UserService } from './../../../@core/data/users.service';
import { UsersService } from './../../../user.service';
import { ListmailService } from './../../../listmail.service';
import { ListMail } from './../../../@core/data/listmail';
import { Observable, Subject } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { SubjectSubscriber } from 'rxjs/internal/Subject';

// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/retry';
// import 'rxjs/add/operator/of';
// import 'rxjs/add/operator/catch';

@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./form-inputs.component.scss'],
  templateUrl: './form-inputs.component.html',
})
export class FormInputsComponent implements OnInit{
  starRate = 2;
  heartRate = 4;
  // AddMail(subject:string,name:string,mail:string,message:string){
  //   subject=subject.trim();
  //   name=name.trim();
  //   mail=mail.trim();
  //   message=message.trim();

  // }

  emails: Observable<any>;
  userid: any;
  constructor(private listmailService: ListmailService,private UsersService: UsersService){
    
  }
  creatMailFromService(Email: string, Messages: string, Subject: string): void{
    this.userid = this.UsersService.getUserInfo();
    this.listmailService.createMail( Subject, Messages , Email, this.userid.id).subscribe((data:any)=>{
      console.log(data);
      alert("Gui thanh cong");
    
    },(err: HttpErrorResponse)=>{
      console.log(err);
    }
    );
  }
  ngOnInit(){
    
  }
 
}
