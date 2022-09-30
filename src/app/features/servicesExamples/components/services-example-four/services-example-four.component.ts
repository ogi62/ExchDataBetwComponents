import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Course } from 'src/app/shared/models/course.model';
import { CoursesService } from '../../services/exampleFourService/courses.service';

@Component({
  selector: 'app-services-example-four',
  templateUrl: './services-example-four.component.html',
  styleUrls: ['./services-example-four.component.css']
})
export class ServicesExampleFourComponent implements OnInit {

  beginnerCourses$: Observable<Course[]>;
  advancedCourses$: Observable<Course[]>;

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses() {
    const courses$ = this.coursesService.loadAllCourses();
    this.beginnerCourses$ = courses$.pipe(
      map(courses=> courses.filter(course => course.category == 'BEGINNER'))
    );
    this.advancedCourses$ = courses$.pipe(
      map(courses=> courses.filter(course => course.category == 'ADVANCED'))
    );
  }

}
