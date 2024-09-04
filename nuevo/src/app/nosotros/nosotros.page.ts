import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.page.html',
  styleUrls: ['./nosotros.page.scss'],
})
export class NosotrosPage implements OnInit {

  constructor() { }

  ngOnInit() { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Aquí puedes manejar el envío del formulario, como mostrar un mensaje de éxito
      console.log('Formulario enviado:', form.value);
    } else {
      // Aquí puedes manejar errores de validación
      console.log('Formulario inválido');
    }
  }

}
