import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './shared.module';

const rootRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home',
        loadChildren: './modules/home/home.module#HomeModule'
    },
    {
        path: 'blog',
        loadChildren: './modules/blog/blog.module#BlogModule'
    }
];


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(rootRoutes),
        SharedModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
    exports: [
        RouterModule
    ]
})
export class AppModule {
}
