import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClickMeComponent } from './clickMe.component';
import { PageNotFoundComponent } from './notFound.component';
import { HomeComponent } from './home.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        HomeComponent,
        ClickMeComponent,
        PageNotFoundComponent
    ],
    bootstrap: [AppComponent]
})

export class AppRoutingComponent { }
