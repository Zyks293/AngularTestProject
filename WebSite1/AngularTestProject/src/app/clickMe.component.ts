import { Component } from '@angular/core';
import { Router, NavigationExtras, RouterLink } from '@angular/router';

@Component({
    template: `
    <h1>Great!</h1>
    <button routerLink="/home" routerlinkActive="active">Home</button>
    <router-outlet></router-outlet>`
})
export class ClickMeComponent {
    title = 'Great!';
}
