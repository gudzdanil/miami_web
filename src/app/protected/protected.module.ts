import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainPageComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), NgbModule],
  declarations: [MainPageComponent]
})
export class ProtectedModule {}
