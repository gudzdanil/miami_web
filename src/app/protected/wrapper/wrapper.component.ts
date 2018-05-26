import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subscription, Observable, concat, of } from 'rxjs';
import { filter, tap, map } from 'rxjs/operators';

@Component({
  selector: 'mi-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent {
  title$: Observable<string>;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.title$ = concat(
      of(this.getRouteBreadcrumb()),
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.getRouteBreadcrumb())
      )
    );
  }

  getRouteBreadcrumb() {
    let snapshot = this.route.snapshot;
    while (snapshot.children.length) {
      snapshot = snapshot.children[0];
    }
    return snapshot.data && snapshot.data.breadcrumb;
  }
}
