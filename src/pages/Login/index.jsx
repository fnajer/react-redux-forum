import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loginUser } from '../../store/actions/auth';

import LoginForm from './LoginForm';

class LoginContainer extends Component {
  componentWillMount() {
    if (this.props.user) {
      this.props.history.push('/');
    }
  }

  handleSubmit = async (values) => {
    await this.props.loginUser(values);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user) {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <LoginForm onSubmit={this.handleSubmit} />
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user
});

const mapDispatchToProps = (dispatch) => ({
  loginUser: (values) => {
    return dispatch(loginUser(values));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
