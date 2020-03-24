import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlPage } from './fl';

@NgModule({
  declarations: [
    FlPage,
  ],
  imports: [
    IonicPageModule.forChild(FlPage),
  ],
})
export class FlPageModule {}
