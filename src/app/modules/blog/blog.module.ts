import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { SharedModule } from '../../shared.module';
import { BlogRoutingModule } from './blog.routing.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        BlogRoutingModule
    ],
    declarations: [BlogComponent]
})
export class BlogModule {
}
