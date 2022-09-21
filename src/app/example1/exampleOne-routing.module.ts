import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ExampleOneComponent } from "./example1.component";

const routes: Routes = [
{    path: '',
    data: {
        title: 'Home'
    },
    component: ExampleOneComponent
}
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExampleOneRoutingModule {}