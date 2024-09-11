import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, AnimationController, IonCard } from '@ionic/angular';
import type { Animation } from '@ionic/angular';

@Component({
  selector: 'app-become-driver',
  templateUrl: './become-driver.page.html',
  styleUrls: ['./become-driver.page.scss'],
})
export class BecomeDriverPage {
  @ViewChild('benefitsCard', { read: ElementRef }) benefitsCard!: ElementRef<HTMLIonCardElement>;
  @ViewChild('contactCard', { read: ElementRef }) contactCard!: ElementRef<HTMLIonCardElement>; // Nueva referencia para la card de "¿Necesitas Más Información?"

  private animation!: Animation;
  private cardCAnimation!: Animation; // 

  constructor(
    private navCtrl: NavController,
    private animationCtrl: AnimationController
  ) {}

  ngAfterViewInit() {
    // Animación para "Beneficios de Ser Conductor"
    this.animation = this.animationCtrl
      .create()
      .addElement(this.benefitsCard.nativeElement)
      .duration(2000)
      .iterations(Infinity)
      .direction('alternate')
      .fromTo('background', 'teal', 'var(--background)');

    // Iniciar la animación automáticamente al cargar la página
    this.play();

    // Animación para "¿Necesitas Más Información?"
    this.animation = this.animationCtrl
      .create()
      .addElement(this.contactCard.nativeElement)
      .duration(1000)
      .iterations(Infinity) // Para repetir la animación infinitamente
      .keyframes([
        { offset: 0, transform: 'scale(1)', opacity: '0.5' },
        { offset: 0.5, transform: 'scale(0.8)', opacity: '1' },
        { offset: 1, transform: 'scale(1)', opacity: '0.5' },
      ]);

    // Iniciar la animación de "¿Necesitas Más Información?"
    this.play();
  }

  play() {
    this.animation.play();
  }

  pause() {
    this.animation.pause();
  }

  stop() {
    this.animation.stop();
  }

  openRegistrationForm() {
    this.navCtrl.navigateForward('/register-driver');
  }

  viewRequirements() {
    this.navCtrl.navigateForward('/requirements');
  }

  uploadDocuments() {
    this.navCtrl.navigateForward('/upload-documents');
  }

  viewTraining() {
    this.navCtrl.navigateForward('/training');
  }

  contactUs() {
    this.navCtrl.navigateForward('/nosotros');
  }
}
