import React, { Fragment } from 'react';
import ReactPaginate from 'react-paginate';

import Thread from '../../../components/Thread';

const HomeThreads = ({ threads, pageCount, handlePageChange, currentPage }) => (
  <Fragment>
    {
      threads.map(thread => (
        <Thread 
          key={thread.id}
          thread={thread}
        />
      ))
    }
    <div className="row justify-content-center my-5">
      <ReactPaginate
        containerClassName="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        nextClassName="page-item"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
        activeClassName="active"
        disabledClassName="disabled"
        breakClassName="page-link"
        pageCount={pageCount}
        onPageChange={handlePageChange}
        forcePage={currentPage}
      />
    </div>
  </Fragment>
);

export default HomeThreads;
