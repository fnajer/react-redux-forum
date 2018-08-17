import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getThreads } from '../../store/actions/threads';

import HomeThreads from './HomeThreads';
import Loader from '../../components/Loader';

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
      <div>
        {
          !this.props.loading &&
          <HomeThreads 
            threads={this.props.threadsData.data}
            pageCount={this.getPageCount(pagesData.total, pagesData.per_page)}
            handlePageChange={this.handlePageChange}
            currentPage={this.props.threadsData.current_page - 1}
          />
        }
        {
          this.props.loading &&
          <Loader 
            width="80px"
            height="80px"
          />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  threadsData: state.threads.threadsData,
  loading: state.threads.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getThreads: (page) => {
    dispatch(getThreads(page));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
