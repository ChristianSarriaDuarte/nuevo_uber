import { Component, OnInit } from '@angular/core';
import { icon, LatLng, Map, marker, Marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-find-ride',
  templateUrl: './find-ride.page.html',
  styleUrls: ['./find-ride.page.scss'],
})
export class FindRidePage implements OnInit {
  map!: Map; // ¡Asegúrate de usar el operador '!' para indicar que será inicializada después!
  selectedVehicle: any = null;
  vehicles = [
    {
      name: 'Auto Normal',
      description: 'Un auto estándar para hasta 4 personas.',
      rating: 4.5,
    },
    {
      name: 'Auto Grande',
      description: 'Un vehículo más grande para hasta 6 personas.',
      rating: 4.7,
    }
  ];

  ngOnInit() {
    this.initMap();
  }

  initMap() {
    setTimeout(() => {
      this.map = new Map('map', {
        center: [-33.4489, -70.6693], // Coordenadas para centrar el mapa en Santiago, Chile
        zoom: 12,
        layers: [
          tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
          })
        ]
      });

      marker([-33.4489, -70.6693], {
        icon: icon({
          iconUrl: 'assets/imagenes/car.amarillo.webp', // Asegúrate de tener este icono en la carpeta correcta
          iconSize: [38, 38]
        })
      }).addTo(this.map);
    }, 1000); // Retardo para asegurar que el contenedor del mapa esté renderizado
  }

  selectVehicle(vehicle: any) {
    this.selectedVehicle = vehicle;
  }

  onSubmit() {
    console.log('Formulario enviado');
    // Aquí puedes agregar la lógica para manejar el formulario.
  }
}
