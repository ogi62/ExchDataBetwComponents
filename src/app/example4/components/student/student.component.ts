import { Component, EventEmitter, Output } from '@angular/core';
import { StudentInterface } from '../../models/Student';

@Component({
  selector: 'student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class Student {
  @Output() newStudent = new EventEmitter<StudentInterface>();

  addStudent(student: HTMLInputElement) {
    if (!student.value) {
      return;
    }
    const studentObj: StudentInterface = {
      id: this.makeId(),
      name: student.value,
    };
    this.newStudent.emit(studentObj);
    student.value = '';
  }

  private makeId() {
    return Math.floor(Math.random() * 1000000);
  }
}
