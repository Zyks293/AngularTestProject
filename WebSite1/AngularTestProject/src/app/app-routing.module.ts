import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ClickMeComponent } from './clickMe.component';
import { PageNotFoundComponent } from './notFound.component';
import { HomeComponent } from './home.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'clickMe', component: ClickMeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }