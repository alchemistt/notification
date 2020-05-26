import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {AuthService} from "../auth.service"
import { element } from 'protractor';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent implements OnInit {
  checklist :Array<any>
  masterSelected:boolean;
  checkedList:any;
  lastnotification={
    body:"",
    subject:"",
    type:"",
  }
  data={
    username:""
  }
  constructor(private route: ActivatedRoute, private router: Router, private auth: AuthService) {
    this.lastnotification.body = this.route.snapshot.paramMap.get('body');
    this.lastnotification.subject = this.route.snapshot.paramMap.get('subject');
    this.lastnotification.type = this.route.snapshot.paramMap.get('type');
    this.masterSelected = false;
    this.checklist = new Array<any>()

   }

  ngOnInit(): void {
    this.auth.getsubscribe()
  .subscribe(checklist =>{console.log(checklist)
    this.checklist =checklist 
    for (var i = 0; i < this.checklist.length; i++) {
      this.checklist[i].isSelected = this.masterSelected;
    }
    
                   },
             err=>console.log(err));
  }
  getCheckedItemList(){
    this.checkedList = [];
    for (var i = 0; i < this.checklist.length; i++) {
      if(this.checklist[i].isSelected)
      this.checkedList.push(this.checklist[i]);
    }
    this.checkedList =(this.checkedList);
  }
  isAllSelected() {
    this.masterSelected = this.checklist.every(function(item:any) {
        return item.isSelected == true;
      })
    this.getCheckedItemList();
  }
  checkUncheckAll() {
    for (var i = 0; i < this.checklist.length; i++) {
      this.checklist[i].isSelected = this.masterSelected;
    }
    this.getCheckedItemList();
  }
  send()
  {
    
   for(var i= 0 ;i< this.checkedList.length;i++)
   {  
    this.data.username=this.checkedList[i].username
    this.sendnotification(this.data)
     
      
    }
    
  }
  
  sendnotification(reciver){
    this.auth.send(reciver).subscribe(data => console.log(data))
    

  }

}
