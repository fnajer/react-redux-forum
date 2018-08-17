import React from 'react';
import { connect } from 'react-redux';

import { getThread } from '../../store/actions/threads';
import SingleThread from './SingleThread';

class ThreadContainer extends React.Component {
  componentWillMount() {
    this.props.getThread(this.props.match.params.id);
  }

  render() {
    return (
      <SingleThread />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getThread: (id) => {
    dispatch(getThread(id));
  }
});

export default connect(null, mapDispatchToProps)(ThreadContainer);