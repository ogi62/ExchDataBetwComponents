import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
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

  loadBeginnerCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.productUrl).pipe(
      map(res => 
        res.filter(
          course => course.category == 'BEGINNER'
          )),
      catchError((err) => {
        const message = 'Unable to show beginner courses';
        console.log(err,message);
        return throwError(err.message);
      })
    );
  }
  
}
