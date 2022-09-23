import { Component, Input, OnInit } from '@angular/core';
import { StudentInterface } from '../models/Student';

@Component({
  selector: 'university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.scss'],
})
export class University implements OnInit {
  @Input() university: string;
  students: StudentInterface[];

  ngOnInit() {
    this.students = [
      {
        id: 1,
        name: 'Ognjen Milic',
      },
      {
        id: 2,
        name: 'Filip Davidovic',
      },
      {
        id: 3,
        name: 'Marko Peric',
      },
      {
        id: 4,
        name: 'Danijela Markovic',
      },
      {
        id: 5,
        name: 'Jovan Ilic',
      },
      {
        id: 6,
        name: 'Ena Colic',
      },
      {
        id: 7,
        name: 'Milena Matovic',
      },
    ];
  }

  addNewStudent(student: StudentInterface) {
    this.students.push(student);
  }
}
