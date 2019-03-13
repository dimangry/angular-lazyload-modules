import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BlogComponent } from './blog.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '', component: BlogComponent,
                children: [
                    {
                        path: '',
                        redirectTo: 'list',
                        pathMatch: 'full'
                    },
                    {
                        path: 'list',
                        loadChildren: './blog-list/blog-list.module#BlogListModule'
                    }
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class BlogRoutingModule {
}
