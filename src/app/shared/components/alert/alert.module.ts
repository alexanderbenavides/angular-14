import { NgModule } from '@angular/core';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { AlertComponent } from './alert.component';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AlertComponent
  ],
  imports: [
    CommonModule,
    MessagesModule,
    MessageModule
  ],
  exports: [
    AlertComponent
  ],
  providers: [MessageService]
})
export class AlertModule { }
