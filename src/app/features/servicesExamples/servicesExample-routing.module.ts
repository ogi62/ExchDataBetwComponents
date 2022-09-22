import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ServicesExampleComponent } from "./components/services-example/services-example.component";

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Services Example'
        },
        component: ServicesExampleComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ServicesExampleRoutingModule {}