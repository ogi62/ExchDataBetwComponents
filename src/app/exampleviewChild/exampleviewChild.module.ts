import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ExampleViewChildRoutingModule } from "./exampleviewChild-routing.module";
import { ExampleViewChildComponent } from "./exampleviewChild.component";
import { GalleryChildComponent } from "./galleryChild/galleryChild.component";
import { ParentAppComponent } from "./parentApp/parentApp.component";
import { LinkViewChildComponent } from './linkViewChild/link-view-child/link-view-child.component';
import { ButtonExampleComponent } from './buttonExample/button-example/button-example.component';

@NgModule({
    declarations:[
        ExampleViewChildComponent,
        GalleryChildComponent,
        ParentAppComponent,
        LinkViewChildComponent,
        ButtonExampleComponent
    ],
    imports: [
        CommonModule,
        ExampleViewChildRoutingModule
    ]
})
export class ExampleViewChildModule {}