import React, { Component } from 'react';
import { connect } from 'react-redux';

import { registerUser } from '../../store/actions/auth';

import RegisterForm from './RegisterForm';


class RegisterContainer extends Component {
  componentWillMount() {
    if (this.props.user) {
      this.props.history.push('/');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user) {
      this.props.history.push('/');
    }
  }

  handleSubmit = async (values) => {
    await this.props.registerUser(values);
  }
  
  render() {
    return (
      <RegisterForm 
        onSubmit={this.handleSubmit}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  registerUser: (values) => {
    return dispatch(registerUser(values)); // work without return, too
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
