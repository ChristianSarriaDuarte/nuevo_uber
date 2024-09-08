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

  private animation!: Animation;

  constructor(
    private navCtrl: NavController,
    private animationCtrl: AnimationController
  ) {}

  ngAfterViewInit() {
    // Creación de la animación aplicada a la card de "Beneficios de Ser Conductor"
    this.animation = this.animationCtrl
      .create()
      .addElement(this.benefitsCard.nativeElement)
      .duration(2000)
      .iterations(Infinity)
      .direction('alternate')
      .fromTo('background', 'teal', 'var(--background)');

    // Iniciar la animación automáticamente al cargar la página
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
