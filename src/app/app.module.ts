import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './example1/child/child.component';
import { ChildCountComponent } from './count/childCount/childCountComponent';
import { CountComponent } from './count/count.component';
import { ParentComponent } from './example1/parent/parent.component';
import { ParentCountComponent } from './count/parentCount/parentCount.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomersListComponent } from './customers/customerList/customersList.component';
import { EditCustomerComponent } from './customers/editCustomer/editCustomer.component';
import { FormsModule } from '@angular/forms';
import { ExampleOneComponent } from './example1/example1.component';
import { ExampleFourComponent } from './example4/example4.component';
import { University } from './example4/university/university.component';
import { Student } from './example4/student/student.component';
import { ExampleViewChildComponent } from './exampleviewChild/exampleviewChild.component';
import { ParentAppComponent } from './exampleviewChild/parentApp/parentApp.component';
import { GalleryChildComponent } from './exampleviewChild/galleryChild/galleryChild.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleOneComponent,
    ParentComponent,
    ChildComponent,
    CountComponent,
    ParentCountComponent,
    ChildCountComponent,
    CustomersComponent,
    CustomersListComponent,
    EditCustomerComponent,
    ExampleFourComponent,
    University,
    Student,
    ExampleViewChildComponent,
    ParentAppComponent,
    GalleryChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
