import { NgModule } from "@angular/core";
import { ServicesExampleComponent } from './components/services-example/services-example.component';
import { ServicesExampleOneComponent } from './components/services-example-one/services-example-one.component';
import { ServicesExampleRoutingModule } from "./servicesExample-routing.module";
import { ServicesExampleTwoComponent } from './components/services-example-two/services-example-two.component';
import { ServicesExampleThreeComponent } from './components/services-example-three/services-example-three.component';
import { ServicesExampleFourComponent } from './components/services-example-four/services-example-four.component';
import { ServicesExampleFiveComponent } from './components/services-example-five/services-example-five.component';
import { ServicesSubmenuComponent } from './components/services-submenu/services-submenu.component';
import { SubmenuServicesService } from "./services/submenu-services.service";
import { CommonModule } from "@angular/common";
import { CourseListComponent } from './components/services-example-three/components/course-list/course-list.component';
import { SingleProductComponent } from './components/services-example-two/components/single-product/single-product.component';
import { LoadingComponent } from './components/services-example-four/components/loading/loading.component';
import { AllBooksComponent } from './components/services-example-five/components/all-books/all-books.component';
import { SingleBookComponent } from './components/services-example-five/components/single-book/single-book.component';
import { EditBooksComponent } from './components/services-example-five/components/edit-books/edit-books.component';
import { BestSellersComponent } from './components/services-example-five/components/best-sellers/best-sellers.component';

@NgModule({
    declarations: [
    ServicesExampleComponent,
    ServicesExampleOneComponent,
    ServicesExampleTwoComponent,
    ServicesExampleThreeComponent,
    ServicesExampleFourComponent,
    ServicesExampleFiveComponent,
    ServicesSubmenuComponent,
    CourseListComponent,
    SingleProductComponent,
    LoadingComponent,
    AllBooksComponent,
    SingleBookComponent,
    EditBooksComponent,
    BestSellersComponent
],
    imports: [
        ServicesExampleRoutingModule,
        CommonModule,
    ],
    exports: [],
    providers: [SubmenuServicesService]
})
export class ServicesExampleModule {}