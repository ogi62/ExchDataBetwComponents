import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountComponent } from './count/count.component';
import { ExampleOneComponent } from './example1/example1.component';

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
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}