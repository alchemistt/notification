import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private urlsubscribe = "http://localhost:8080/Notifications/Notification/subscribe "
  private urlsave ="http://localhost:8080/Notifications/Notification/save"
  private urlgetuser = "http://localhost:8080/Notifications/Notification/subscriber"
  private urlSend ="http://localhost:8080/Notifications/Notification/send"
  constructor(private http: HttpClient) { }
  subscribe(user)
  {
    return this.http.post<any>(this.urlsubscribe,user)
  }
  save(notification)
  { console.log("------")
  console.log(notification)
    return this.http.post<any>(this.urlsave,notification)
  }
  getsubscribe():Observable<any>
  {
    return this.http.get<any>(this.urlgetuser);
  }
  send(user)
  {
    return this.http.post<any>(this.urlSend,user)
  
  }
}
