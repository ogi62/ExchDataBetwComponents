import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/features/servicesExamples/services/productsService/products.service';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  get product(): Product {
    return this.productsService.currentProduct;
  }

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
  }

}
