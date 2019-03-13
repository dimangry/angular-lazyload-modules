import { NgModule } from '@angular/core';

import { BlogListComponent } from './blog-list.component';
import { SharedModule } from '../../../shared.module';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path     : '',
    component: BlogListComponent
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [BlogListComponent]
})
export class BlogListModule { }
