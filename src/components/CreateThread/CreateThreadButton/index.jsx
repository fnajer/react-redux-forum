import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class CreateThreadButton extends React.Component {
  render() {
    return (
      <Fragment>
        {
          this.props.authenticated &&
          <button className="btn btn-info my-3 form-control" data-toggle="modal" data-target="#createThread">Start thread</button>
        }
        {
          !this.props.authenticated &&
          <Link className="btn btn-info my-3 form-control" to="/login">Login to start a thread</Link>
        }
      </Fragment>
    );
  }
}

export default connect(state => ({
  authenticated: state.auth.user,
}))(CreateThreadButton);