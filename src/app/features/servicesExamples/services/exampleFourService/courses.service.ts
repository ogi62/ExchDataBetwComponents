import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, shareReplay, Subject } from 'rxjs';
import { Course } from 'src/app/shared/models/course.model';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
    private productUrl = 'assets/productsExampleThree.json';
    private subject = new BehaviorSubject([]);
  courses$ = this.subject.asObservable();

  constructor(private http: HttpClient) {}

  loadAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.productUrl).pipe(
        shareReplay()
    );
  }
}
