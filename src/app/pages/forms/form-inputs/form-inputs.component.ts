import { Notify } from './../../../@core/data/config';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { UsersService } from './../../../user.service';
import { ListmailService } from './../../../listmail.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ToasterConfig } from 'angular2-toaster/src/toaster-config';
import { ToasterService, Toast, BodyOutputType } from 'angular2-toaster';


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
  constructor(private listmailService: ListmailService, private UsersService: UsersService,private toasterService: ToasterService) {

  }
  ngOnInit() {

  }
  config = new ToasterConfig({
    positionClass: Notify.position,
    timeout: Notify.timeout,
    newestOnTop: Notify.isNewestOnTop,
    tapToDismiss: Notify.isHideOnClick,
    preventDuplicates: Notify.isDuplicatesPrevented,
    animation: Notify.animationType,
    limit: Notify.toastsLimit,
  });
  public showToast(type: string, title: string, body: string) {
      
    const toast: Toast = {
      type: type,
      title: title,
      body: body,
      timeout: Notify.timeout,
      showCloseButton: Notify.isCloseButton,
      bodyOutputType: BodyOutputType.TrustedHtml,
    };
    this.toasterService.popAsync(toast);
  }
}
