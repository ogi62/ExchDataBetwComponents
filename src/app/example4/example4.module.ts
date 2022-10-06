import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExampleFourRoutingModule } from './example4-routing.module';
import { ExampleFourComponent } from './example4.component';
import { Student } from './components/student/student.component';
import { University } from './components/university/university.component';

@NgModule({
  declarations: [ExampleFourComponent, Student, University],
  imports: [CommonModule, ExampleFourRoutingModule],
  exports: [ExampleFourComponent],
})
export class ExampleFourModule {}
