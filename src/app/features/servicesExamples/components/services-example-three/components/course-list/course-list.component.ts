import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/models/course.model';

@Component({
  selector: 'course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  @Input() courses: Course[];
  @Input() title: string;

  constructor() {}

  ngOnInit(): void {}
}
