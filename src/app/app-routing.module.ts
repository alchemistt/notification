import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendComponent } from './send/send.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { NotificationComponent } from './notification/notification.component';


const routes: Routes = [{
  path:"",
  redirectTo:'/subscribe',
  pathMatch:'full'

},

{
path:"subscribe",
component: SubscribeComponent
},
{
  path:"send",
  component: SendComponent
  },
  {
    path:"notification",
    component: NotificationComponent
    }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
