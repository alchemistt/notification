import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
data={
  username:"",
  phone : ""
}
subscribe()
{
  this.auth.subscribe(this.data).subscribe(data => console.log(data))
  alert("subscribe  "+this.data.username)
  this.router.navigate(['/notification']);

  
}
  constructor(private router: Router ,private auth: AuthService) { 

  
  }

  ngOnInit(): void {
  }

}
