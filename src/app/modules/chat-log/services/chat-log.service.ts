import { Injectable } from '@angular/core';
import { apiEndPoints } from '../../../config/api-end-points';
import { HttpService } from './../../../core/services/http.service';
import { catchError } from 'rxjs/operators';
import { throwError, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatLogService {

  constructor(private httpService: HttpService) { }

  memberList() {
    const configUrl = apiEndPoints.members;
    return this.httpService.getData(configUrl)
      .pipe(catchError(error => {
        return throwError(error);
      }));
  }

  messageList() {
    const configUrl = apiEndPoints.messages;
    return this.httpService.getData(configUrl)
      .pipe(catchError(error => {
        return throwError(error);
      }));
  }

}
