import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NewUser } from '../new_user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup
  user_submit: NewUser

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'username': new FormControl('elongton', Validators.required),
      'email': new FormControl('enrique.longton@gmail.com', [Validators.required, Validators.email]),
      'password': new FormControl('puttie', Validators.required),
      'password_again': new FormControl('puttie', Validators.required),

    })
  }

  onSubmit(){
    let signupForm = this.signupForm;
    this.user_submit = new NewUser(
      signupForm.value.username,
      // signupForm.value.email,
      // signupForm.value.password
    )

    console.log(this.user_submit)
  }//onSubmit



  }//signupcomponent
