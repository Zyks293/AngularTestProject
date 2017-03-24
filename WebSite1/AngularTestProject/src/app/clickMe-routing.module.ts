import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ClickMeComponent } from './clickMe.component';
import { PageNotFoundComponent } from './notFound.component';

const clickMeRoutes: Routes = [
    { path: 'home', component: AppComponent },
    { path: 'clickMe', component: ClickMeComponent },
    { path: '', redirectTo: '/clickMe', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(clickMeRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class ClickMeRoutingModule { }