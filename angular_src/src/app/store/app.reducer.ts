import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUser from '../user/store/user.reducer';

export interface AppState {
  user: fromUser.UserState,
}

export const reducers: ActionReducerMap<AppState> = {
  user: fromUser.userReducer
};

//Define Slice Feature Selectors
export const getUserState = createFeatureSelector<fromUser.UserState>('user');
//created selectors

//program stuff
export const newUserState = createSelector(getUserState, fromUser.getUserState)
