import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalSuccessComponent } from './modal-success/modal-success.component';
import { ModalErrorComponent } from './modal-error/modal-error.component';
import { MatButton, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [ModalSuccessComponent],
  entryComponents: [ModalSuccessComponent]
})
export class ModalsModule {}
