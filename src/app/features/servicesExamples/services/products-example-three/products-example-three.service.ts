import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, shareReplay, throwError } from 'rxjs';
import { Course } from 'src/app/shared/models/course.model';


@Injectable({
  providedIn: 'root'
})
export class ProductsExampleThreeService {
  private productUrl = 'assets/productsExampleThree.json';


  constructor(private http: HttpClient) { }
  //1.moj nacin ...  koji 3 puta radi http request u networku sto nije dobro 

  // loadAllCourses():Observable<Course[]> {
  //   return this.http.get<Course[]>(this.productUrl);
  // }
  // loadBeginnerCourses(): Observable<Course[]> {
  //   return this.http.get<Course[]>(this.productUrl).pipe(
  //     map(res => 
  //       res.filter(
  //         course => course.category == 'BEGINNER'
  //         )),
  //     catchError((err) => {
  //       const message = 'Unable to show beginner courses';
  //       console.log(err,message);
  //       return throwError(err.message);
  //     })
  //   );
  // }

  // loadAdvancedCourses(): Observable<Course[]> {
  //   return this.http.get<Course[]>(this.productUrl).pipe(
  //     map(
  //       res => res.filter(course => course.category == 'ADVANCED')
  //     ),
  //     catchError((err) => {
  //       const message = 'Unable to show advanced courses';
  //       console.log(err, message);
  //       return throwError(err.message);
  //     })
  //   )
  // }
  loadAllCourses():Observable<Course[]> {
    return this.http.get<Course[]>(this.productUrl).pipe(
      shareReplay()
    );
  }
}
