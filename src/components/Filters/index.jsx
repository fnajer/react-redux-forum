import React from 'react';
import { parse } from 'query-string';
import { connect } from 'react-redux';

import { changeQueryParam, clearQueryParam } from '../../store/actions/router';

import CheckedIcon from '../../components/CheckedIcon';

const Filters = ({ mostPopular, setUnanswered, popular, unanswered, by, user, myThreads, clearQueryParam }) => ((
  <ul className="list-group mb-3">
    <li className="list-group-item" onClick={clearQueryParam}>All</li>
    {
      user &&
      <li className="list-group-item" onClick={() => myThreads(user.username)}>
        {by && <CheckedIcon />}
        My threads
      </li>
    }
    <li className="list-group-item" onClick={setUnanswered}>
      {unanswered && <CheckedIcon />}
      Unanswered
    </li>    
    <li className="list-group-item" onClick={mostPopular}>
      {popular && <CheckedIcon />}
      Most Popular
    </li>
  </ul>
))

export default connect(state => ({
  popular: parse(state.router.location.search).popular,
  unanswered: parse(state.router.location.search).unanswered,
  by: parse(state.router.location.search).by,
  user: state.auth.user,
}), dispatch => ({
  mostPopular: () => dispatch(changeQueryParam('popular', true)),
  setUnanswered: () => dispatch(changeQueryParam('unanswered', true)),
  myThreads: (name) => dispatch(changeQueryParam('by', name)),
  clearQueryParam: () => dispatch(clearQueryParam()),
}))(Filters)