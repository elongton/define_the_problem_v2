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
      'username': new FormControl(null),
      'email': new FormControl(null),
      'password': new FormControl(null),
      'password_again': new FormControl(null),

    })
  }

  onSubmit(){
    let signupForm = this.signupForm;
    this.user_submit = new NewUser(
      signupForm.value.username,
      signupForm.value.email,
      signupForm.value.password)

    console.log(this.user_submit)
  }//onSubmit



  }//signupcomponent


}
