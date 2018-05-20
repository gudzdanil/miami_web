import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mi-auth-wrapper',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./auth-wrapper.component.scss']
})
export class AuthWrapperComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
