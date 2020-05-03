import { connect } from 'react-redux';
import { State } from '../../reducers';
import LoginPage from './Login';
import { signInUser } from './../../actions/signInAction';
import { User } from '../../models/user';

const mapStateToProps = (state: State) => {
  return {
    user: state.userProfileReducer.user
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onSignIn: (user: User) => {
      dispatch(signInUser(user));
    }
  };
};

export const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
