import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule
import { RegisterDriverPageModule } from './register-driver/register-driver.module'; // Asegúrate de que esté importado aquí
import { FindRidePage } from './find-ride/find-ride.page';  // Asegúrate de que esté declarado aquí

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    // otros componentes
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    RegisterDriverPageModule 
    // Otros módulos
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
