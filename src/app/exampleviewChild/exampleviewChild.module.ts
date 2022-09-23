import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ExampleViewChildRoutingModule } from "./exampleviewChild-routing.module";
import { ExampleViewChildComponent } from "./exampleviewChild.component";
import { GalleryChildComponent } from "./galleryChild/galleryChild.component";
import { ParentAppComponent } from "./parentApp/parentApp.component";
import { LinkViewChildComponent } from './linkViewChild/link-view-child/link-view-child.component';
import { ButtonExampleComponent } from './buttonExample/button-example/button-example.component';
import { FourthExampleComponent } from './fourth-example/fourth-example.component';
import { FourthExampleChildComponent } from './fourth-example/components/fourth-example-child/fourth-example-child.component';

@NgModule({
    declarations:[
        ExampleViewChildComponent,
        GalleryChildComponent,
        ParentAppComponent,
        LinkViewChildComponent,
        ButtonExampleComponent,
        FourthExampleComponent,
        FourthExampleChildComponent
    ],
    imports: [
        CommonModule,
        ExampleViewChildRoutingModule
    ]
})
export class ExampleViewChildModule {}