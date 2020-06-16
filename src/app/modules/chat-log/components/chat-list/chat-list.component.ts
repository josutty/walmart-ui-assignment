import { Component, OnInit } from '@angular/core';
import { ChatLogService }from '../../services/chat-log.service'

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {
  memberData: any;
  messageData: any;

  constructor(private chatLogService : ChatLogService) { }
  // memberData:any;
  // messageData = [];

  ngOnInit() {
    

    this.chatLogService.memberList().subscribe(
      response => {
        this.memberData = response;
        console.log("response", this.memberData)
      });

    this.chatLogService.messageList().subscribe(
      response => {
        this.messageData = response;
      });

      console.log("response", this.messageData)
      console.log("response", this.memberData)
  }

}
