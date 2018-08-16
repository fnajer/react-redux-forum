import React, { Fragment } from 'react';
import ReactPaginate from 'react-paginate';

const HomeThreads = ({ threads, pageCount, handlePageChange }) => (
  <Fragment>
    {
      threads.map(thread => (
        <div key={thread.id} className="card mb-3">
          <div className="card-header">
            <img src="http://i.pravatar.cc/300" className="mr-3 rounded-circle" width="30px" height="30px" alt="" />
            <span className="text-sm text-muted">{thread.creator.name}, <b>3 hrs ago</b></span>
            <a href="" className="btn btn-info btn-xs float-right">view thread</a>
          </div>
          <div className="card-body">
            <h5 className="text-center">{thread.title}</h5>
            <p className="text-center">
              {`${thread.body.substr(0, 90)}...`}
            </p>
          </div>
          <div className="card-footer text-muted">
            <span>{thread.replies_count} replies</span>
            <a href="" className="btn btn-primary float-right btn-xs">{thread.channel.name}</a>
          </div>
        </div>
      ))
    }
    <div className="row justify-content-center my-5">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item"><a class="page-link" href="">Previous</a></li>
          <li class="page-item"><a class="page-link" href="">1</a></li>
          <li class="page-item"><a class="page-link" href="">2</a></li>
          <li class="page-item"><a class="page-link" href="">3</a></li>
          <li class="page-item"><a class="page-link" href="">Next</a></li>
        </ul>
      </nav>
    </div>
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
    />
  </Fragment>
);

export default HomeThreads;
