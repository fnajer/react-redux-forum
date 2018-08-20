import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { getThread, updateThread } from '../../store/actions/threads';
import { getReplies } from '../../store/actions/replies';

import SingleThread from './SingleThread';
import Loader from '../../components/Loader';

class ThreadContainer extends React.Component {
  state = {
    editing: false,
  }

  switchEditing = () => {
    this.setState((prevState) => {
      return {
        editing: !prevState.editing,
      };
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.updatedThread) {
      this.switchEditing();
    }
  }

  handleUpdateThread = async (id, values) => {
    await this.props.updateThread(id, values);
  }


  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.getThread(id);
    this.props.getReplies(id);
  }

  getPageCount = (total, perPage) => {
    return Math.ceil(total / perPage);
  }

  handlePageChange = (page) => {
    const { id } = this.props.match.params;
    this.props.getReplies(id, page.selected + 1);
  }

  render() {
    return (
      <Fragment>
        {
          !this.props.loading &&
          <SingleThread 
            thread={this.props.thread}
            replies={this.props.replies}
            handlePageChange={this.handlePageChange}
            getPageCount={this.getPageCount}
            loadingReplies={this.props.loadingReplies}
            user={this.props.user}
            editing={this.state.editing}
            switchEditing={this.switchEditing}
            updateThread={this.updateThread}
          />
        }
        {
          this.props.loading &&
          <Loader 
            width="80px"
            height="80px"
          />
        }
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  thread: state.thread.data,
  loading: state.thread.loading,
  replies: state.thread.replies,
  loadingReplies: state.thread.loadingReplies,
  user: state.auth.user,
  updatedThread: state.editThread.thread,
});

const mapDispatchToProps = (dispatch) => ({
  getThread: (id) => {
    dispatch(getThread(id));
  },
  getReplies: (id, page) => {
    dispatch(getReplies(id, page));
  },
  updateThread: (id, data) => {
    return dispatch(updateThread(id, data));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ThreadContainer);