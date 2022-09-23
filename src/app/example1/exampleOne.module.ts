import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppModule } from "../app.module";
import { ChildCountComponent } from "../count/childCount/childCountComponent";
import { CountComponent } from "../count/count.component";
import { ParentCountComponent } from "../count/parentCount/parentCount.component";
import { CustomersListComponent } from "../customers/customerList/customersList.component";
import { CustomersComponent } from "../customers/customers.component";
import { EditCustomerComponent } from "../customers/editCustomer/editCustomer.component";
import { NavbarComponent } from "../shared/components/navbar/navbar.component";
import { SubmenuComponent } from "../shared/components/submenu/submenu.component";
import { ChildComponent } from "./components/child/child.component";
import { ExampleOneComponent } from "./example1.component";
import { ExampleOneRoutingModule } from "./exampleOne-routing.module";
import { ParentComponent } from "./components/parent/parent.component";

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
        ParentCountComponent,
        SubmenuComponent
    ],
    imports: [
        CommonModule,
        ExampleOneRoutingModule,
        FormsModule,
    ],
    exports: [
        ExampleOneComponent
    ]
})
export class ExampleOneModule {}