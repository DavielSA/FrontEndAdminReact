import React from 'react';
// @material-ui/core
import withStyles from '@material-ui/core/styles/withStyles';
import SignIn from './SignIn';
import dashboardStyle from '../../assets/jss/material-dashboard-react/views/dashboardStyle';

interface Props {
  classes: any;
}

interface State {
  value: number;
}

class Login extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeIndex = this.handleChangeIndex.bind(this);
  }
  handleChange = (event: any, value: number) => {
    this.setState({ value });
  }

  handleChangeIndex = (index: number) => {
    this.setState({ value: index });
  }

  render() {
    return (
      <div>
        <form action="">
          <SignIn />
        </form>
      </div >
    );
  }
}

export default withStyles(dashboardStyle)(Login);
