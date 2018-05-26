import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { ModalSuccessComponent } from './modal-success/modal-success.component';

@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [ModalSuccessComponent],
  entryComponents: [ModalSuccessComponent]
})
export class ModalsModule {}
