import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountComponent } from '../count/count.component';
import { CustomersComponent } from '../customers/customers.component';
import { ExampleOneComponent } from './example1.component';
import { ParentComponent } from './components/parent/parent.component';
import { ArticleComponent } from './components/article/article.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Home',
    },
    component: ExampleOneComponent,
    children: [
      {
        path: 'input-output-examples',
        data: {
          title: 'Parent Example',
        },
        component: ParentComponent,
      },
      {
        path: 'count',
        component: CountComponent,
        data: {
          title: 'Count Example',
        },
      },
      {
        path: 'customers',
        component: CustomersComponent,
        data: {
          title: 'Customers Example',
        },
      },
      {
        path: 'article',
        component: ArticleComponent,
        data: {
          title: 'Article Example',
        },
      },
      {
        path: '',
        redirectTo: 'input-output-examples',
        pathMatch: 'full'
      }
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExampleOneRoutingModule {}
