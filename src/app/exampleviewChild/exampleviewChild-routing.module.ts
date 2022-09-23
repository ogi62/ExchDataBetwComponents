import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleViewChildComponent } from './exampleviewChild.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Example ViewChild',
    },
    component: ExampleViewChildComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExampleViewChildRoutingModule {}
