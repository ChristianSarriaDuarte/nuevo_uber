import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Asegúrate de tener el Router importado

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { // Asegúrate de inyectar el Router
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onRegister() {
    if (this.registerForm.valid) {
      console.log('Form submitted:', this.registerForm.value);
      this.router.navigate(['/uber-front']); // Redirige a la página de uber-front
    } else {
      console.log('Form is invalid');
    }
  }
}
