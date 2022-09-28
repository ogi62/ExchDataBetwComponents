import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { ProductsService } from '../../services/productsService/products.service';

@Component({
  selector: 'app-services-example-two',
  templateUrl: './services-example-two.component.html',
  styleUrls: ['./services-example-two.component.css']
})
export class ServicesExampleTwoComponent implements OnInit {
  products: Product[];
  errorMessage: string;

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.productsService.getProdcuts().subscribe((products: Product[]) => {
      this.products = products;
    },
    (error: any)=> (this.errorMessage = <any>error)
    );
  }

  onProductSelection(product: Product): void {
    this.productsService.currentProduct = product;
  }

}
