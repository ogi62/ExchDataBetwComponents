import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesExampleFiveComponent } from './components/services-example-five/services-example-five.component';
import { ServicesExampleFourComponent } from './components/services-example-four/services-example-four.component';
import { ServicesExampleOneComponent } from './components/services-example-one/services-example-one.component';
import { ServicesExampleThreeComponent } from './components/services-example-three/services-example-three.component';
import { ServicesExampleTwoComponent } from './components/services-example-two/services-example-two.component';
import { ServicesExampleComponent } from './components/services-example/services-example.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Services Example',
    },
    component: ServicesExampleComponent,
    children: [
      {
        path: 'services-example-one',
        component: ServicesExampleOneComponent,
      },

      {
        path: 'services-example-two',
        component: ServicesExampleTwoComponent,
      },

      {
        path: 'services-example-three',
        component: ServicesExampleThreeComponent,
      },

      {
        path: 'services-example-four',
        component: ServicesExampleFourComponent,
      },

      {
        path: 'services-example-five',
        component: ServicesExampleFiveComponent,
      },
      {
        path: '',
        redirectTo: 'services-example-one',
        pathMatch: 'full'
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesExampleRoutingModule {}
