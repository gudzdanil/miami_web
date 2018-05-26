import { Component } from '@angular/core';

@Component({
  selector: 'mi-auth-wrapper',
  template: `<mat-card><mat-card-content><ng-content></ng-content></mat-card-content></mat-card>`,
  styleUrls: ['./auth-wrapper.component.scss']
})
export class AuthWrapperComponent {
  constructor() {}
}
