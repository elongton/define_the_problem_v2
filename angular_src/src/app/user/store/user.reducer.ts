import { Action } from '@ngrx/store';
import { UserActions, TRY_CREATE_USER, } from './user.actions';
import { NewUser } from '../new_user.model';

import * as fromRoot from '../../store/app.reducer';

export interface UserState {
  new_user: NewUser;
};
const initialState: UserState = {
  new_user: null,
};

export function userReducer(state = initialState, action: UserActions) {
  switch (action.type) {
    case TRY_CREATE_USER:
      return {
        ...state,
        new_user: action.payload
      };
    default: {
      return state;
    }
  }
}
export const getUserState = (state: UserState) => state;
