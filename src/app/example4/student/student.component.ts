import { Component, EventEmitter, Output } from '@angular/core';
import { StudentInterface } from '../models/Student';


@Component({
    selector: 'student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.scss']
})

export class Student {
    @Output() newStudent = new EventEmitter<StudentInterface>();


    addStudent(student: string) {
        const studentObj : StudentInterface = {
            id: Math.floor(Math.random() * 1999999),
            name: student
        };
        this.newStudent.emit(studentObj);
    }
}