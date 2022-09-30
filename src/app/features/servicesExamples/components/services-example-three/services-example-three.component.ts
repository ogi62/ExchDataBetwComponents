import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Course } from 'src/app/shared/models/course.model';
import { ProductsExampleThreeService } from '../../services/products-example-three/products-example-three.service';

@Component({
  selector: 'app-services-example-three',
  templateUrl: './services-example-three.component.html',
  styleUrls: ['./services-example-three.component.css'],
})
export class ServicesExampleThreeComponent implements OnInit {
  courses$: Observable<Course[]>;
  begginerCourses$: Observable<Course[]>;
  advancedCourses$: Observable<Course[]>;

  constructor(
    private productsExampleThreeService: ProductsExampleThreeService
  ) {}

  //1.first way of doing http which is not good because we have 3 functions which do the same thing ...
  // ngOnInit(): void {
  //  this.courses$ = this.productsExampleThreeService.loadAllCourses();
  //  this.begginerCourses$ = this.productsExampleThreeService.loadBeginnerCourses();
  //  this.advancedCourses$ = this.productsExampleThreeService.loadAdvancedCourses();
  // }

  // only one http req...
  ngOnInit(): void {
    this.courses$ = this.productsExampleThreeService.loadAllCourses();
    this.begginerCourses$ = this.courses$.pipe(
      map((courses) =>
        courses.filter((course) => course.category == 'BEGINNER')
      )
    );
    this.advancedCourses$ = this.courses$.pipe(
      map((courses) =>
        courses.filter((course) => course.category == 'ADVANCED')
      )
    );
  }
}
