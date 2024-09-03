import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  email: string = '';
  password: string = '';

  constructor(private navCtrl: NavController) {}

  login() {
    // Aquí puedes agregar la lógica de autenticación.
    // Por ejemplo, validar los campos y redirigir al usuario.
    console.log('Email:', this.email);
    console.log('Password:', this.password);

    // Navegar a la página principal después del inicio de sesión exitoso.
    this.navCtrl.navigateForward('/home');
  }
}
