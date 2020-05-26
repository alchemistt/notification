import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
notification={
  body:"",
  subject:"",
  type:""
}
  constructor(private router: Router ,private auth: AuthService) { }
  valueType(data)
  {
    alert(data)
  this.notification.type=data;
  }
  create(){
    if (this.notification.type=="")
    {
      alert("Select a Correct Type")
    }
    else{
      console.log(this.notification);
      
      this.auth.save(this.notification).subscribe(data => console.log(data))
      // alert("subscribe  "+this.notification.subject)
      this.router.navigate(['/send',this.notification]);
    
    }
  }
  ngOnInit(): void {
  }

}
