import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-become-driver',
  templateUrl: './become-driver.page.html',
  styleUrls: ['./become-driver.page.scss'],
})
export class BecomeDriverPage {

  constructor(private navCtrl: NavController) { }

  openRegistrationForm() {
    // Redirige al usuario al formulario de registro (puede ser una URL externa o una página dentro de la app)
    window.open('https://www.uber.com/signup/driver/', '_blank');
  }

  viewRequirements() {
    // Muestra los requisitos (puede ser una URL externa o una página dentro de la app)
    this.navCtrl.navigateForward('/requirements');
  }

  uploadDocuments() {
    // Redirige a la página de carga de documentos
    this.navCtrl.navigateForward('/upload-documents');
  }

  viewTraining() {
    // Redirige a la página de capacitación
    this.navCtrl.navigateForward('/training');
  }

  contactUs() {
    // Redirige a la página de contacto o muestra un formulario de contacto
    this.navCtrl.navigateForward('/nosotros');
  }
}
