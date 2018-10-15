import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NewUser } from '../new_user.model';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/app.reducer'
import * as US from '../store/user.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup
  user_submit: NewUser
  user: NewUser

  constructor(private store: Store<fromRoot.AppState>) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'username': new FormControl('elongton', Validators.required),
      'email': new FormControl('enrique.longton@gmail.com', [Validators.required, Validators.email]),
      'password': new FormControl('puttie', Validators.required),
      'password_again': new FormControl('puttie', Validators.required),

    })

    //subscribe to newuser state
    this.store.select(fromRoot.newUserState)
      .subscribe(
        (result) => {
          this.user = result;
        }
      )


  }

  onSubmit(){
    let signupForm = this.signupForm;
    this.user_submit = new NewUser(
      signupForm.value.username,
      // signupForm.value.email,
      // signupForm.value.password
    )

    console.log(this.user_submit)
    this.store.dispatch(new US.TryCreateUser(this.user_submit))
    console.log('finished')
  }//onSubmit



  }//signupcomponent
