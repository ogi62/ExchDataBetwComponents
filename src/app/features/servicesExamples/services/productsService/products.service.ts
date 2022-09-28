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
    // if(this.products) {
    //   return of(this.products);
    // }
    return this.httpClient.get<Product[]>(this.productUrl).pipe(
      tap((data) => console.log(JSON.stringify(data))),
      tap((data) => (this.products = data)),
      catchError(this.handleError)
    )
  }

  getProduct(id: number) : Observable<Product> {
    if(id === 0) {
      return of(this.initializeProduct());
    }
    if(this.products) {
      const foundItem = this.products.find(item => item.id == id);
      if(foundItem) {
        return of(foundItem);
      }
    }
    const url = `${this.productUrl}/${id}`;
    return this.httpClient.get<Product>(url).pipe(
      tap(data => console.log('Data: '+ JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private initializeProduct(): Product {
    // return an initialized object
    return {
      id: 0,
      productName: '',
      price: 0
    };
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage: string;
    if(err.error instanceof Error) {
      // A client side or network error occurred. Handle it accordingly.
      errorMessage = `An error occuerrd: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong
      errorMessage = `Backend returned code ${err.status}, body was: ${err.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
  
}
