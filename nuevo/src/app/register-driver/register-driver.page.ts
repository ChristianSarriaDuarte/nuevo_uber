import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-driver',
  templateUrl: './register-driver.page.html',
  styleUrls: ['./register-driver.page.scss'],
})
export class RegisterDriverPage implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      licenseType: ['', Validators.required],
      licenseExpiryDate: ['', Validators.required],
      confirm: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
      console.log('Datos del conductor:', formData);
      // Aquí puedes agregar lógica para registrar al conductor
    } else {
      console.log('Formulario inválido');
    }
  }
}
