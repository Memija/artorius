import { Component } from '@angular/core';

@Component({
  selector: 'artorius-root',
  template: `
    <artorius-common-header></artorius-common-header>
    <artorius-navigation></artorius-navigation>
    <router-outlet></router-outlet>
    <artorius-common-footer></artorius-common-footer>
  `
})
export class AppComponent { }
