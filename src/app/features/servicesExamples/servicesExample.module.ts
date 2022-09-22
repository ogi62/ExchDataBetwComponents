import { NgModule } from "@angular/core";
import { ServicesExampleComponent } from './components/services-example/services-example.component';
import { ServicesExampleOneComponent } from './components/services-example-one/services-example-one.component';
import { ServicesExampleRoutingModule } from "./servicesExample-routing.module";
import { ServicesExampleTwoComponent } from './components/services-example-two/services-example-two.component';
import { ServicesExampleThreeComponent } from './components/services-example-three/services-example-three.component';
import { ServicesExampleFourComponent } from './components/services-example-four/services-example-four.component';
import { ServicesExampleFiveComponent } from './components/services-example-five/services-example-five.component';

@NgModule({
    declarations: [
    ServicesExampleComponent,
    ServicesExampleOneComponent,
    ServicesExampleTwoComponent,
    ServicesExampleThreeComponent,
    ServicesExampleFourComponent,
    ServicesExampleFiveComponent
  ],
    imports: [
        ServicesExampleRoutingModule
    ],
    exports: []
})
export class ServicesExampleModule {}