import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FindRidePageRoutingModule } from './find-ride-routing.module';
import { FindRidePage } from './find-ride.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FindRidePageRoutingModule
  ],
  declarations: [FindRidePage]
})
export class FindRidePageModule {}
