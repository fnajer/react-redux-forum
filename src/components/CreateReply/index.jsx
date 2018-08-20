import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { createReply, getReplies } from '../../store/actions/replies';
import CreateReplyForm from './CreateReplyForm';

class CreateReply extends React.Component {

  handleCreateReply = async (values) => {
    const threadId = this.props.thread.id;
    await this.props.createReply(threadId, values);
    await this.props.getReplies(threadId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.createdReply) {
      const { $ } = window;
      $('#createReply').modal('hide');
    }
  }

  render() {
    return (
      <Fragment>
        {
          this.props.authenticated &&
          <CreateReplyForm onSubmit={this.handleCreateReply} />
        }
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  authenticated: state.auth.user,
  thread: state.thread.data,
  createdReply: state.createReply.reply,
});

const mapDispatchToProps = (dispatch) => ({
  createReply: (threadId, data) => {
    return dispatch(createReply(threadId, data));
  },
  getReplies: (threadId) => {
    dispatch(getReplies(threadId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CreateReply));