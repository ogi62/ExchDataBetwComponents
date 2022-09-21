import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountComponent } from './count/count.component';
import { CustomersComponent } from './customers/customers.component';
import { ExampleOneComponent } from './example1/example1.component';
import { ExampleFourComponent } from './example4/example4.component';
import { ExampleViewChildComponent } from './exampleviewChild/exampleviewChild.component';

const routes: Routes = [
  {
    path: 'input-output-examples',
    data: {
      title: 'Home Page',
    },
    loadChildren: () => import('./example1/exampleOne.module').then(
      (m) => m.ExampleOneModule
    )
  },
  {
    path: 'example4',
    data: {
      title: 'Example 4'
    },
    loadChildren: () => import('./example4/example4.module').then(
      (m) => m.ExampleFourModule
    )
  },
  {
    path: 'exampleViewChild',
    data: {
      title: 'Example View Child'
    },
    loadChildren: ()=> import('./exampleviewChild/exampleviewChild.module').then(
      (m)=> m.ExampleViewChildModule
    )
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