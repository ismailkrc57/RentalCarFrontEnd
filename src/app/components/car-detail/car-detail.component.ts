import { CarDetail } from './../../models/entities/carDetail';
import { CarService } from './../../services/car.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  cars: CarDetail[] = [];
  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.getCarDetails();
  }
  getCarDetails() {
    this.carService.getCarsDetails().subscribe((response) => {
      this.cars = response.data;
    });
  }
}
