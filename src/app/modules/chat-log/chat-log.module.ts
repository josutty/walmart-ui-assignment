import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatLogRoutingModule } from './chat-log-routing.module';
import { ChatListComponent } from './components/chat-list/chat-list.component';

@NgModule({
  declarations: [ChatListComponent],
  imports: [
    CommonModule,
    ChatLogRoutingModule
  ]
})
export class ChatLogModule { }
