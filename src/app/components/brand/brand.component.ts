import { Brand } from './../../models/entities/brand';
import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];
  constructor(private brandService: BrandService) {}

  ngOnInit(): void {
    this.getAllBrand();
  }
  getAllBrand() {
    this.brandService.getAllBrand().subscribe((response) => {
      this.brands = response.data;
    });
  }
}
