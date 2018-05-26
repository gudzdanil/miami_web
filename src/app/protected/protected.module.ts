import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from './wrapper/wrapper.component';
import { GoalsComponent } from './goals/goals.component';
import { ThoughtsComponent } from './thoughts/thoughts.component';
import { MapComponent } from './map/map.component';
import { FooterComponent } from './footer/footer.component';
import {
  MatToolbarModule,
  MatCardModule,
  MatGridListModule,
  MatCheckboxModule,
  MatIconModule,
  MatButton,
  MatButtonModule
} from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: 'goals',
        pathMatch: 'full',
        component: GoalsComponent,
        data: {
          breadcrumb: 'My goals'
        }
      },
      {
        path: 'thoughts',
        pathMatch: 'full',
        component: ThoughtsComponent,
        data: {
          breadcrumb: 'My thoughts'
        }
      },
      {
        path: 'map',
        pathMatch: 'full',
        component: MapComponent,
        data: {
          breadcrumb: 'My map'
        }
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'goals'
      },
      {
        path: '**',
        redirectTo: 'goals'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [
    WrapperComponent,
    GoalsComponent,
    ThoughtsComponent,
    MapComponent,
    FooterComponent
  ]
})
export class ProtectedModule {}
