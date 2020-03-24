import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FlPage } from '../fl/fl';
import { EmgcPage } from '../emgc/emgc';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goToFl(friend_id:any){
    let friend = this.allFriends.find(({id})=> id===friend_id);
    this.navCtrl.push(FlPage,{});
  }
  goToEmgc(friend_id:any){
    let friend = this.allFriends.find(({id})=> id===friend_id);
    this.navCtrl.push(FlPage,{});
  }

}
