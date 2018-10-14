import { Action } from '@ngrx/store';
import { NewUser } from '../new_user.model';

export const TRY_CREATE_USER = '[User] Try to Create User';

export class TryCreateUser implements Action {
  readonly type = TRY_CREATE_USER;
  constructor(public payload: NewUser){}
}


export type UserActions = TryCreateUser;
