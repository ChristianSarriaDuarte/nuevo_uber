import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnimationController } from '@ionic/angular'; // Importar el controlador de animación

@Component({
  selector: 'app-register-driver',
  templateUrl: './register-driver.page.html',
  styleUrls: ['./register-driver.page.scss'],
})
export class RegisterDriverPage implements OnInit {
  registerForm!: FormGroup;
  showError = false;
  formSubmitted = false;

  constructor(private fb: FormBuilder, private animationCtrl: AnimationController) { } // Inyectar el AnimationController

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
    this.formSubmitted = true;
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
      console.log('Datos del conductor:', formData);
      this.showError = false;
      this.resetCardBorder(); // Si es válido, restauramos el borde

      // Aquí puedes agregar lógica para registrar al conductor, como una llamada a un servicio
    } else {
      this.showError = true;
      console.log('Formulario inválido');
      this.triggerErrorAnimation(); // Si es inválido, aplicamos la animación
    }
  }

  // Función para aplicar la animación de borde rojo a la card
  triggerErrorAnimation() {
    const card = document.querySelector('ion-card'); // Seleccionar la card
    const animation = this.animationCtrl.create()
      .addElement(card!)
      .duration(300)
      .beforeClearStyles(['box-shadow'])
      .afterStyles({
        'box-shadow': 'rgba(255, 0, 50, 0.4) 0px 4px 16px 6px', // Borde rojo
      });
    animation.play();
  }

  // Función para restaurar el borde original cuando el formulario es válido
  resetCardBorder() {
    const card = document.querySelector('ion-card');
    const animation = this.animationCtrl.create()
      .addElement(card!)
      .duration(300)
      .beforeClearStyles(['box-shadow'])
      .afterStyles({
        'box-shadow': 'none', // Restaurar sin sombra
      });
    animation.play();
  }
}
