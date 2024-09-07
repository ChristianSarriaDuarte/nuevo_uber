import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { UberFrontPageRoutingModule } from './uber-front-routing.module';
import { UberFrontPage } from './uber-front.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UberFrontPageRoutingModule
  ],
  declarations: [UberFrontPage]
})
export class UberFrontPageModule {}