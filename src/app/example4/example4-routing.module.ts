import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleFourComponent } from './example4.component';

const routes: Routes = [
  {
    path: '',
    component: ExampleFourComponent,
    data: {
      title: 'Example Four Component',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExampleFourRoutingModule {}
