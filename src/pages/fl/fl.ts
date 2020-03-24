import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FlPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fl',
  templateUrl: 'fl.html',
})
export class FlPage {
  allFriends=[
    {
      id:1,
      name:"Nittaya Pukyim",
      tel:"0838041636",
    },
    {
      id:2,
      name:"Treeruk kulrat",
      tel:"0838777788",
    },
    {
      id:3,
      name:"patcharee munmungyon",
      tel:"0838041636",
    },
    {
      id:4,
      name:"patcharee munmungyon",
      tel:"0838041636",
    },
    {
      id:5,
      name:"kitti chaipoom",
      tel:"0838041636",
    }
  ];

  constructor(public navCtrl: NavController) {

  }
  goToFl(friend_id:any){
    let friend = this.allFriends.find(({id})=> id===friend_id);
    this.navCtrl.push(FlPage,{});
  }

}
