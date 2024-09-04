import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegisterDriverPageRoutingModule } from './register-driver-routing.module';
import { RegisterDriverPage } from './register-driver.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,  // Asegúrate de incluir esto
    IonicModule,
    RegisterDriverPageRoutingModule
  ],
  declarations: [RegisterDriverPage]
})
export class RegisterDriverPageModule {}
