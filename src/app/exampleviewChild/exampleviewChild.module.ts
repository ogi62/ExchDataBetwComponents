import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ExampleViewChildRoutingModule } from "./exampleviewChild-routing.module";
import { ExampleViewChildComponent } from "./exampleviewChild.component";
import { GalleryChildComponent } from "./galleryChild/galleryChild.component";
import { ParentAppComponent } from "./parentApp/parentApp.component";

@NgModule({
    declarations:[
        ExampleViewChildComponent,
        GalleryChildComponent,
        ParentAppComponent
    ],
    imports: [
        CommonModule,
        ExampleViewChildRoutingModule
    ]
})
export class ExampleViewChildModule {}