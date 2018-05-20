import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'mi-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {
	user: FormGroup;
	userPasword;
	userFirstName;
	userSecondName;
	
	constructor(private fb: FormBuilder) {
    this.createForm();
  }
	
	createForm() {
		this.user = this.fb.group({
			'firstName': ['',[ Validators.required, Validators.minLength(1)]],
			'secondName': ['', [Validators.required, Validators.minLength(1)]],
			'email': ['', [Validators.required, Validators.email]],
			'passwords': this.fb.group({
      	password1: ['', [Validators.required, Validators.minLength(6)]],
      	password2: ['', Validators.required, Validators.minLength(6)]]
    	}, {validator: this.matchValidator})
		})
	}
	
	matchValidator() {
		
	}
	
	register($event) {
		if (this.user.invalid) return;
		this.auth.logIn(this.user.value).subscribe(() => {
      this.router.navigate(['panel']);
    });
	}
}
