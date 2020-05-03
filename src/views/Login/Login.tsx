import React from 'react';
// @material-ui/core
import withStyles from '@material-ui/core/styles/withStyles';
import { SignIn } from './SignIn';
import dashboardStyle from '../../assets/jss/material-dashboard-react/views/dashboardStyle';
import { User } from './../../models/user';
interface Props {
  classes: any;
  onSignIn: (user: User) => void;
}

interface State {
  email: string;
  password: string;
}

const userContext = React.createContext({ user: { email: '', password: '' }, signIn: undefined });
class LoginPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: '0',
      password: '',
    };
  }

  handleChange = (name: string, value: string) => {
    this.setState({
      ...this.state,
      [name]: value
    });
  }
  getUser = (): User => ({ email: this.state.email, password: this.state.password });

  signIn = () => (this.props.onSignIn(this.getUser()));

  render() {
    return (
      <userContext.Provider value={{ user: this.getUser(), signIn: this.signIn as any }}>
        <SignIn onChange={this.handleChange} />
      </userContext.Provider >
    );
  }
}
export {
  userContext // Export it so it can be used by other Components
};

export default withStyles(dashboardStyle)(LoginPage);
