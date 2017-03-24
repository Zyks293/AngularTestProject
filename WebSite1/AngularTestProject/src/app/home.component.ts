import { Component } from '@angular/core';
import { Router, NavigationExtras, RouterLink } from '@angular/router';

@Component({
    template: `
    <h1>Hello World!</h1>
    <nav>
      <a routerLink="/clickMe" routerlinkActive="active">Click Me</a>
    </nav>
    <router-outlet></router-outlet>`
})
export class HomeComponent { }
