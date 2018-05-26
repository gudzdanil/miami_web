import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { ModalSuccessComponent } from '../../modals/modal-success/modal-success.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'mi-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  user: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.createForm();
  }

  createForm() {
    this.user = this.fb.group({
      firstName: ['', Validators.required],
      secondName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.minLength(6), Validators.maxLength(12)]
      ],
      passwordRepeat: [
        '',
        [
          Validators.required,
          (control: AbstractControl) => this.matchValidator(control.value)
        ]
      ]
    });
  }

  matchValidator(password: string): ValidationErrors {
    if (this.user && password !== this.user.get('password').value) {
      return {
        passwordRepeat: true
      };
    }
    return null;
  }

  register($event) {
    if (this.user.invalid) {
      return;
    }
    this.auth.register(this.user.value).subscribe(({ error, message }) => {
      const dialogRef = this.dialog.open(ModalSuccessComponent, {
        data: { message }
      });
      dialogRef.afterClosed().subscribe(() => this.router.navigate(['login']));
    });
  }
}
