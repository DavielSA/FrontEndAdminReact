import { actionsEnums } from './actionEnums';
import { User } from './../models/user';

export const signInUser = (newUser: User) => ({
  type: actionsEnums.SIGN_IN_USER,
  payload: newUser,
});