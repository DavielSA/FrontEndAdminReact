import { User } from '../models/user';
import { Action } from '../models/action';
import { actionsEnums } from './../actions/actionEnums';

export interface UserProfileState {
  user: User;
}

const defaultUserState = (): UserProfileState => ({
  user: {
    email: 'John Doe',
    password: '',
  }
});

const handleUserSignInAction = (state: UserProfileState, user: User) => {
  return {
    ...state,
    user,
  };
};

export const userProfileReducer = (state = defaultUserState(), action: Action) => {
  switch (action.type) {
  case actionsEnums.SIGN_IN_USER:
    return handleUserSignInAction(state, action.payload);
  default:
    return state;
  }
};
