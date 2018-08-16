import React, { Component } from 'react';
import { connect } from 'react-redux';

import getThreads from '../../store/actions/threads';

import HomeThreads from './HomeThreads';

class HomeContainer extends Component {
  componentWillMount() {
    this.props.getThreads();
  }

  render() {
    return (
      <HomeThreads />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getThreads: () => {
    dispatch(getThreads());
  }
});

export default connect(null, mapDispatchToProps)(HomeContainer);
