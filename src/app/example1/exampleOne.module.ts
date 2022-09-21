import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ChildCountComponent } from "../count/childCount/childCountComponent";
import { CountComponent } from "../count/count.component";
import { ParentCountComponent } from "../count/parentCount/parentCount.component";
import { CustomersListComponent } from "../customers/customerList/customersList.component";
import { CustomersComponent } from "../customers/customers.component";
import { EditCustomerComponent } from "../customers/editCustomer/editCustomer.component";
import { ChildComponent } from "./child/child.component";
import { ExampleOneComponent } from "./example1.component";
import { ExampleOneRoutingModule } from "./exampleOne-routing.module";
import { ParentComponent } from "./parent/parent.component";

@NgModule({
    declarations:[
        ExampleOneComponent,
        ChildComponent,
        ParentComponent,
        CustomersComponent,
        CustomersListComponent,
        EditCustomerComponent,
        CountComponent,
        ChildCountComponent,
        ParentCountComponent
    ],
    imports: [
        CommonModule,
        ExampleOneRoutingModule,
        FormsModule
    ],
    exports: [
        ExampleOneComponent
    ]
})
export class ExampleOneModule {}