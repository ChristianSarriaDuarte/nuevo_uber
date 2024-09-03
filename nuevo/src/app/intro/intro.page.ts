// src/app/intro/intro.page.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage {
  constructor(private router: Router) {}

  navigateToNextPage() {
    this.router.navigate(['/login']); // Asegúrate de que la ruta '/login' esté definida en tu enrutador
  }
}
