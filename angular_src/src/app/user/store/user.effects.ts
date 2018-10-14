import { Actions, Effect } from '@ngrx/effects'
import { Injectable } from '@angular/core';
import { NewUser } from '../new_user.model';
//
import { HttpClient, HttpHeaders } from '@angular/common/http';

import * as UserActions from './user.actions'
//
//
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/app.reducer'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
//
//
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class UserEffects {
  private djangoCreateUserURL = 'localhost:8000/testapp/create';

  @Effect()
  addUser = this.actions$
    .ofType(UserActions.TRY_CREATE_USER)
    // .map((action: UserActions.TryCreateUser) => {
    //   return action.payload;
    // })
    // .switchMap((user: NewUser) => {
    //   return this.http.post<NewUser>(this.djangoCreateUserURL, user, httpOptions)
    // })
    // .mergeMap(response => {
    //   return []
    // });


  constructor(private actions$: Actions, private http: HttpClient, private store: Store<fromRoot.AppState>){}


}
