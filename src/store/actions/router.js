import { push } from 'connected-react-router';
import { parse, stringify } from '../../lib/query-string';

export const changeQueryParam = (name, value) => (dispatch, getState) => {
  const { location } = getState().router;
  const query = parse(location.search);

  if (query[name] && name !== 'page' && name !== 'channel') {
    delete query[name];
  } else {
    query[name] = value;
  }

  dispatch(push(`${location.pathname}?${stringify(query)}`));
}

export const clearQueryParam = () => (dispatch, getState) => {
  const { location } = getState().router;

  dispatch(push(`${location.pathname}`));
};