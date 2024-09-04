import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { icon, LatLngExpression, Map, marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-find-ride',
  templateUrl: './find-ride.page.html',
  styleUrls: ['./find-ride.page.scss'],
})
export class FindRidePage implements OnInit {
  findRideForm!: FormGroup;
  minDate: string = '';
  cars: any[] = [];
  map!: Map;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.minDate = this.getTomorrowDate(); // Set minDate
    this.findRideForm = this.fb.group({
      origin: ['', Validators.required],
      destination: ['', Validators.required],
      date: [''],
      price: ['']
    });

    // Initialize car data
    this.cars = [
      { id: 1, model: 'Toyota Prius', price: 20, position: [-33.4489, -70.6693] },
      { id: 2, model: 'Honda Civic', price: 25, position: [-33.4500, -70.6700] },
      { id: 3, model: 'Ford Focus', price: 22, position: [-33.4510, -70.6710] }
    ];

    // Initialize the map after the view is loaded
    setTimeout(() => this.initializeMap(), 0);
  }

  getTomorrowDate(): string {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  initializeMap() {
    const mapOptions = {
      center: [-33.4489, -70.6693] as LatLngExpression, // Santiago, Chile
      zoom: 12
    };

    this.map = new Map('map', mapOptions);

    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    // Define a custom icon
    const carIcon = icon({
      iconUrl: 'assets/imagenes/cupe,i.png', // Path to your car image
      iconSize: [32, 32], // Size of the icon
      iconAnchor: [16, 32], // Anchor point of the icon
      popupAnchor: [0, -32] // Popup anchor point
    });

    // Add car markers to the map with custom icons
    this.cars.forEach(car => {
      marker(car.position, { icon: carIcon, title: car.model })
        .addTo(this.map)
        .bindPopup(`<strong>${car.model}</strong><br>Price: $${car.price}`);
    });
  }

  onSubmit() {
    if (this.findRideForm.valid) {
      const formValue = this.findRideForm.value;
      // Handle form submission
      console.log('Form submitted:', formValue);
    }
  }
}
