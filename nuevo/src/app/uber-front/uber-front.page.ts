import { Component, AfterViewInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-uber-front',
  templateUrl: './uber-front.page.html',
  styleUrls: ['./uber-front.page.scss'],
})
export class UberFrontPage implements AfterViewInit {
  showOffer: boolean = true; // Asegúrate de tener una variable para mostrar la oferta

  constructor(private animationCtrl: AnimationController) {}

  ngAfterViewInit() {
    this.animateOfferPopup();
  }

  private animateOfferPopup() {
    const offerPopup = document.querySelector('#offer-banner');

    if (offerPopup) {
      const animation = this.animationCtrl
        .create()
        .addElement(offerPopup)
        .duration(1000) // Duración en milisegundos
        .keyframes([
          { offset: 0, transform: 'scale(1)', opacity: '1' },
          { offset: 0.5, transform: 'scale(1.5)', opacity: '0.3' },
          { offset: 1, transform: 'scale(1)', opacity: '1' }
        ]);

      animation.play();
    }
  }

  claimOffer() {
    // Lógica para reclamar la oferta
    this.showOffer = false; // Oculta la oferta después de reclamar
  }

  closeOffer() {
    // Lógica para cerrar la oferta
    this.showOffer = false; // Oculta la oferta al cerrarla
  }
}
