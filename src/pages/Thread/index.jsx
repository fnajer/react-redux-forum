import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { getThread } from '../../store/actions/threads';

import SingleThread from './SingleThread';
import Loader from '../../components/Loader';

class ThreadContainer extends React.Component {
  componentWillMount() {
    this.props.getThread(this.props.match.params.id);
  }

  render() {
    console.log(this.props);
    return (
      <Fragment>
        {
          !this.props.loading &&
          <SingleThread 
            thread={this.props.thread}
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
});

const mapDispatchToProps = (dispatch) => ({
  getThread: (id) => {
    dispatch(getThread(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ThreadContainer);