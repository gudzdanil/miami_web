import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'mi-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  user: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.createForm();
  }

  createForm() {
    this.user = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.minLength(6), Validators.maxLength(12)]
      ]
    });
  }

  submit($event) {
    if (this.user.invalid) {
      return;
    }
    this.auth.logIn(this.user.value).subscribe(() => {
      this.router.navigate(['panel']);
    });
  }
}
