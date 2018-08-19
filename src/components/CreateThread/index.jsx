import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { createThread } from '../../store/actions/threads';

import CreateThreadForm from './CreateThreadForm';

class CreateThread extends React.Component {
  handleSubmit = async (data) => {
    await this.props.createThread(data);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.createdThread) {
      const { $ } = window;
      $('#createThread').modal('hide');
      this.props.history.push(`/thread/${nextProps.createdThread.id}`);
    }
  }

  render() {
    return (
      <Fragment>
        {
          this.props.authenticated &&
          <CreateThreadForm onSubmit={this.handleSubmit} channels={this.props.channels} />
        }
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  authenticated: state.auth.user,
  channels: state.channels.data,
  createdThread: state.createThread.thread,
});

const mapDispatchToProps = (dispatch) => ({
  createThread: (data) => {
    return dispatch(createThread(data));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CreateThread));