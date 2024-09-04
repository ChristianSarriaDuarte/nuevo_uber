import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-find-ride',
  templateUrl: './find-ride.page.html',
  styleUrls: ['./find-ride.page.scss'],
})
export class FindRidePage implements OnInit {
  findRideForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // Inicializar el formulario
    this.findRideForm = this.fb.group({
      origin: ['', Validators.required],
      destination: ['', Validators.required],
      price: ['']
    });
  }

  onSubmit() {
    if (this.findRideForm.valid) {
      const formValue = this.findRideForm.value;
      // Manejar la sumisión del formulario
      console.log('Formulario enviado:', formValue);
    }
  }
}
