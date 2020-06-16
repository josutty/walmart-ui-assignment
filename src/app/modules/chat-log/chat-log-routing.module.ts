import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatListComponent } from './components/chat-list/chat-list.component'

const routes: Routes = [
  {
    path: '',
    component: ChatListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatLogRoutingModule { }
