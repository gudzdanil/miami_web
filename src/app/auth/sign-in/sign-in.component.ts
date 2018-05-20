import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'mi-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent implements OnInit {
	signIn: FormGroup;
	titleAlert: string = "this fild is requaired";
	
	constructor(private fb: FormBuilder) {
		this.createForm();
	}
	
  ngOnInit() {
		
  }

	createForm() {
    this.signIn = this.fb.group({
      name: ['', Validators.required], 
			password: ['', Validators.required, Validators.minLength(6), Validators.max(12)]
    });
  }
	

}
