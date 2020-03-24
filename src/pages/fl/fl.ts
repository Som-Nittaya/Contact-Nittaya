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
      image:"logo.png",
    },
    {
      id:2,
      name:"Treeruk kulrat",
      tel:"0838777788",
      image:"logo.png",
    },
    {
      id:3,
      name:"patcharee munmungyon",
      tel:"0838041636",
      image:"src/assets/imgs/01.jpg",
    },
    {
      id:4,
      name:"putida chomdee",
      tel:"0838041636",
      image:"02.jpg",
    },
    {
      id:5,
      name:"kitti chaipoom",
      tel:"0838041636",
      image:"03.jpg",
    },
    {
      id:6,
      name:"siriluk chanontree",
      tel:"0838990909",
      image:"03.jpg",
    },
    {
      id:7,
      name:"somchok mungmee",
      tel:"0838041636",
      image:"03.jpg",
    },
    {
      id:8,
      name:"saifon srisuy",
      tel:"0838041636",
      image:"03.jpg",
    }
  ];

  constructor(public navCtrl: NavController) {

  }
  goToFl(friend_id:any){
    let friend = this.allFriends.find(({id})=> id===friend_id);
    this.navCtrl.push(FlPage,{});
  }

}
