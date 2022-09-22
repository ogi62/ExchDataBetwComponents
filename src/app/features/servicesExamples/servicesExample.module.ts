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

@NgModule({
    declarations: [
    ServicesExampleComponent,
    ServicesExampleOneComponent,
    ServicesExampleTwoComponent,
    ServicesExampleThreeComponent,
    ServicesExampleFourComponent,
    ServicesExampleFiveComponent,
    ServicesSubmenuComponent
],
    imports: [
        ServicesExampleRoutingModule,
        CommonModule,
    ],
    exports: [],
    providers: [SubmenuServicesService]
})
export class ServicesExampleModule {}