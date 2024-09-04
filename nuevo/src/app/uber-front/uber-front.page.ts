import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uber-front',
  templateUrl: './uber-front.page.html',
  styleUrls: ['./uber-front.page.scss'],
})
export class UberFrontPage implements OnInit {
  showOffer: boolean = true; // Para mostrar el popup de oferta

  constructor() { }

  ngOnInit() {
  }

  claimOffer() {
    // Lógica para reclamar la oferta
    console.log('Oferta reclamada');
    this.closeOffer(); // Opcionalmente, cierra la oferta después de reclamarla
  }

  closeOffer() {
    // Lógica para cerrar el popup de oferta
    this.showOffer = false;
  }

}
