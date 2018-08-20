import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class CreateReplyButton extends React.Component {
  render() {
    return (
      <Fragment>
        {
          this.props.authenticated &&
          <button className="btn btn-info my-3 form-control" data-toggle="modal" data-target="#createReply">Create Reply</button>
        }
        {
          !this.props.authenticated &&
          <Link to="/login" className="btn btn-info my-3 form-control">Sign in To Create Reply</Link>
        }
      </Fragment>
    );
  }
}

export default connect(state => ({
  authenticated: state.auth.user,
}))(CreateReplyButton);