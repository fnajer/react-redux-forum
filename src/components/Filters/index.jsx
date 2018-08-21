import React from 'react';
import { parse } from 'query-string';
import { connect } from 'react-redux';

import { changeQueryParam } from '../../store/actions/router';

const CheckIcon = () => ((
  <span className="mr-2">
    <ion-icon name="checkmark"></ion-icon>
  </span>
));

const Filters = ({ mostPopular, setUnanswered, popular, unanswered, by, user, myThreads }) => ((
  <ul className="list-group mb-3">
    <li className="list-group-item">All</li>
    {
      user &&
      <li className="list-group-item" onClick={() => myThreads(user.username)}>
        {by && <CheckIcon />}
        My threads
      </li>
    }
    <li className="list-group-item" onClick={setUnanswered}>
      {unanswered && <CheckIcon />}
      Unanswered
    </li>    
    <li className="list-group-item" onClick={mostPopular}>
      {popular && <CheckIcon />}
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
}))(Filters)