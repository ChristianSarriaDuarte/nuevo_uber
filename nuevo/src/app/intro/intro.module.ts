import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; // Importa IonicModule aquí

import { IntroPageRoutingModule } from './intro-routing.module';
import { IntroPage } from './intro.page';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,  // Asegúrate de que esté importado
    IntroPageRoutingModule
    
  ],
  declarations: [IntroPage]
})
export class IntroPageModule {}
