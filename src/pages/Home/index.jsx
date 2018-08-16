import React, { Component } from 'react';
import { connect } from 'react-redux';

import getThreads from '../../store/actions/threads';

import HomeThreads from './HomeThreads';

class HomeContainer extends Component {
  componentWillMount() {
    this.props.getThreads();
  }

  getPageCount = (total, perPage) => {
    return Math.ceil(total / perPage);
  }

  handlePageChange = (page) => {
    this.props.getThreads(page.selected + 1);
  }

  render() {
    const pagesData = this.props.threadsData;
    return (
      <HomeThreads 
        threads={this.props.threadsData.data}
        pageCount={this.getPageCount(pagesData.total, pagesData.per_page)}
        handlePageChange={this.handlePageChange}
      />
    );
  }
}

const mapStateToProps = state => ({
  threadsData: state.threads,
});

const mapDispatchToProps = (dispatch) => ({
  getThreads: (page) => {
    dispatch(getThreads(page));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
