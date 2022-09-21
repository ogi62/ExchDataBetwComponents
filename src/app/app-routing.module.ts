import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountComponent } from './count/count.component';
import { CustomersComponent } from './customers/customers.component';
import { ExampleOneComponent } from './example1/example1.component';
import { ExampleFourComponent } from './example4/example4.component';
import { ExampleViewChildComponent } from './exampleviewChild/exampleviewChild.component';

const routes: Routes = [
  {
    path: 'home-page',
    data: {
      title: 'Home Page',
    },
    component: ExampleOneComponent,
  },
  {
    path: 'example2',
    data: {
        title: 'Example 2'
    },
    component: CountComponent
  },
  {
    path: 'example3',
    data: {
      title: 'Example 3'
    },
    component: CustomersComponent
  },
  {
    path: 'example4',
    data: {
      title: 'Example 4'
    },
    component: ExampleFourComponent
  },
  {
    path: 'exampleViewChild',
    data: {
      title: 'Example View Child'
    },
    component: ExampleViewChildComponent
  },
  {
    path: '',
    component: ExampleOneComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}