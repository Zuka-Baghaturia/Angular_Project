import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { OnInit } from '@angular/core';
import { Products1Service } from '../../AppProducts/products1.service';
import { Product } from '../Interface/interface';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [CommonModule, FormsModule ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})

export class ProductsComponent  implements OnInit{

  // MyData: any;

  // constructor(private products1Service: Products1Service) {}

  // ngOnInit(): void {
  //   this.products1Service.getData().subscribe((data) => {
  //     this.MyData = data;
  //   });
  // }


  // deleteProduct(id: number) {
  //   this.products1Service.deleteData(id).subscribe(() => {
  //     this.MyData.products = this.MyData.products.filter((p: Product) => p.id !== id);
  //   });
  // }




  MyData: any;
  categoryFilter: string = '';
  minPriceFilter: number | null = null;
  maxPriceFilter: number | null = null;
  ratingFilter: number | null = null;

  constructor(private products1Service: Products1Service) {}

  ngOnInit(): void {
    this.products1Service.getData().subscribe((data) => {
      this.MyData = data;
    });
  }

  deleteProduct(id: number) {
    this.products1Service.deleteData(id).subscribe(() => {
      this.MyData.products = this.MyData.products.filter((p: Product) => p.id !== id);
    });
  }


  filterByCategory(product: Product): boolean {
    return this.categoryFilter ? product.category.toLowerCase().includes(this.categoryFilter.toLowerCase()) : true;
  }

  filterByPrice(product: Product): boolean {
    const meetsMinPrice = this.minPriceFilter !== null ? product.price >= this.minPriceFilter : true;
    const meetsMaxPrice = this.maxPriceFilter !== null ? product.price <= this.maxPriceFilter : true;
    return meetsMinPrice && meetsMaxPrice;
  }

  filterByRating(product: Product): boolean {
    return this.ratingFilter !== null ? product.rating >= this.ratingFilter : true;
  }


  filteredProducts() {
    return this.MyData?.products.filter((product: Product) => {
      return this.filterByCategory(product) && this.filterByPrice(product) && this.filterByRating(product);
    }) || [];
  }
















}










