import { Component } from '@angular/core';

@Component({
  selector: 'mi-auth-wrapper',
  template: `<mat-card><mat-card-content><router-outlet></router-outlet></mat-card-content></mat-card>`,
  styleUrls: ['./auth-wrapper.component.scss']
})
export class AuthWrapperComponent {
  constructor() {}
}
