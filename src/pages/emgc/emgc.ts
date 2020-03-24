import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EmgcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-emgc',
  templateUrl: 'emgc.html',
})
export class EmgcPage {
  Emergency=[
    {
      id:1,
      name:"แจ้งเหตุด่วนเหตุร้าย",
      tel:"191",
    },
    {
      id:2,
      name:"แจ้งเหตุไฟไหม้ขดับเพลิง",
      tel:"199",
    },
    {
      id:3,
      name:"สายด่วนตำรวจท่องเที่ยว",
      tel:"1155",
    },
    {
      id:4,
      name:"หน่วยกู้ชีพ วชิรพยาบาล",
      tel:"1554",
    },
    {
      id:5,
      name:"สายด่วนกรมทางหลวง",
      tel:"1586",
    },
    {
      id:6,
      name:"ไฟฟ้านครหลวง",
      tel:"1130",
    },
    {
      id:7,
      name:"รับแจ้งรถหาย",
      tel:"1192",
    },
    {
      id:8,
      name:"หน่วยแพทย์ฉุกเฉิน",
      tel:"1646",
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmgcPage');
  }

}
