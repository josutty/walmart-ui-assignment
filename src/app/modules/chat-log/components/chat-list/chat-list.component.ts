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
  displayData: any = [];
  msg: any;
  fullName: any;
  img: any;
  chatrowIndex: any = [0];

  constructor(private chatLogService : ChatLogService) { }

  ngOnInit() {

    let memberDetails = new Promise((resolve, reject) => {
      this.chatLogService.memberList()
      .toPromise()
      .then(
        data => {
          let memberData = data;
          resolve(memberData);
        }
      )
    })

    let messageDetails = new Promise((resolve, reject) => {
      this.chatLogService.messageList()
      .toPromise()
      .then(
        data => {
          let messageData = data;
          resolve(messageData);
        }
      )
    })
    
    Promise.all([memberDetails, messageDetails]).then((values) => {
      this.combineMessageMemberDetail(values)
    })

  }

  combineMessageMemberDetail(val) {
      let memberDetails = val[0];
      let msgDetails = val[1];
      let memberDetailsCopy = [...memberDetails]
      let msgDetailsCopy = [...msgDetails]

      for(var msg of msgDetailsCopy) {
        const found = memberDetailsCopy.find(element => element.id==msg.userId);
        if(found) {
          delete found['id'];
          delete found['ip'];
          msg = {...msg, ...found}
          this.displayData.push(msg)
        }

      }
      
      this.displayData.sort(function(a,b){return <any>new Date(b.timestamp) - <any>new Date(a.timestamp)});
      this.msg = this.displayData[0].message;
      this.img = this.displayData[0].avatar;
      this.fullName = this.displayData[0].firstName + ' '+ this.displayData[0].lastName;
  }

  chatMsg(event,index) {
    this.chatrowIndex.pop();
    this.chatrowIndex.push(index)
    this.msg = event.message;
    this.img = event.avatar;
    this.fullName = event.firstName + ' ' + event.lastName;
  }


}
