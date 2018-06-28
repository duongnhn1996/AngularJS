import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { UserService } from './../../../@core/data/users.service';
import { UsersService } from './../../../user.service';
import { ListmailService } from './../../../listmail.service';
import { ListMail } from './../../../@core/data/listmail';
import { Observable, Subject } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';


// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/retry';
// import 'rxjs/add/operator/of';
// import 'rxjs/add/operator/catch';

@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./form-inputs.component.scss'],
  templateUrl: './form-inputs.component.html',
})
export class FormInputsComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  emails: Observable<any>;
  userid: any;
  constructor(private listmailService: ListmailService, private UsersService: UsersService) {

  }
  private creatMailFromService(Mailto: string, Messages: string, Subject: string): void {
    this.blockUI.start('Loading...');
    this.userid = this.UsersService.getUserInfo();
    this.listmailService.createMail(Mailto, Messages, Subject, this.userid.id)
      .subscribe(
        value => { this.emails = value; 
        this.blockUI.stop();
      });
    
  }
  ngOnInit() {

  }

}
