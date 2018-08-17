import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { getThread } from '../../store/actions/threads';
import { getReplies } from '../../store/actions/replies';

import SingleThread from './SingleThread';
import Loader from '../../components/Loader';

class ThreadContainer extends React.Component {
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
});

const mapDispatchToProps = (dispatch) => ({
  getThread: (id) => {
    dispatch(getThread(id));
  },
  getReplies: (id, page) => {
    dispatch(getReplies(id, page));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ThreadContainer);