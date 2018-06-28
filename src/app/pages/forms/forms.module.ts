import { BlockUIModule } from 'ng-block-ui';
import { ListmailService } from './../../listmail.service';
import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule, routedComponents } from './forms-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    FormsRoutingModule,
    BlockUIModule.forRoot()
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    ListmailService
  ],
})
export class FormsModule { }
