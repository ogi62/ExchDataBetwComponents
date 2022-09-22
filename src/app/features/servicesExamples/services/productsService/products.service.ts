import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { catchError,of,throwError, Observable, tap } from 'rxjs';
import { Product } from 'src/app/shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productUrl = 'assets/products.json';
  private products: Product[];
  currentProduct: Product | null;

  constructor(
    private httpClient: HttpClient
  ) { }

  getProdcuts(): Observable<Product[]> {
    if(this.products) {
      return of(this.products);
    }
    return this.httpClient.get<Product[]>(this.productUrl).pipe(
      tap((data) => console.log(JSON.stringify(data))),
      tap((data) => (this.products = data)),
      catchError(this.handleError)
    )
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage: string;
    if(err.error instanceof Error) {
      errorMessage = `An error occuerrd: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}, body was: ${err.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
  
}
