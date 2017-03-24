import { Component } from '@angular/core';
import { Router, NavigationExtras, RouterLink } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    template: '<router-outlet></router-outlet>'
})
export class AppComponent { }
