// src/app/login/login.page.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(private router: Router) {}

  login() {
    // Aquí va la lógica para iniciar sesión
    this.router.navigate(['/uber-front']); // Redirige a la página principal
  }

  navigateToRegister() {
    this.router.navigate(['/register']); // Asegúrate de que la ruta '/register' esté definida en tu enrutador
  }
}
