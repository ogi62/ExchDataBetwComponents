import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ChildCountComponent } from './count/childCount/childCountComponent';
import { CountComponent } from './count/count.component';
import { ParentComponent } from './parent/parent.component';
import { ParentCountComponent } from './count/parentCount/parentCount.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomersListComponent } from './customers/customerList/customersList.component';
import { EditCustomerComponent } from './customers/editCustomer/editCustomer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    CountComponent,
    ParentCountComponent,
    ChildCountComponent,
    CustomersComponent,
    CustomersListComponent,
    EditCustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
