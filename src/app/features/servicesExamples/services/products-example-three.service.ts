import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Course } from 'src/app/shared/models/course.model';


@Injectable({
  providedIn: 'root'
})
export class ProductsExampleThreeService {
  private productUrl = 'assets/productsExampleThree.json';


  constructor(private http: HttpClient) { }

  loadAllCourses():Observable<Course[]> {
    return this.http.get<Course[]>(this.productUrl);
  }
  
}
