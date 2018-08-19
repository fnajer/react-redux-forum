import axios from 'axios';
import { SubmissionError } from 'redux-form';
import config from '../../config';

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export const loginUser = (values) => async (dispatch, getState) => {
  try {
    const responce = await axios.post(`${config.apiUrl}/login`, {
      email: values.email,
      password: values.password,
    });

    localStorage.setItem('authUser', JSON.stringify(responce.data.data));

    dispatch({
      type: LOGIN_USER,
      payload: responce.data.data,
    });
  } catch (errors) {
    throw new SubmissionError({
      _error: 'Invalid credentials.',
    });
  }
}

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('authUser');

  dispatch({
    type: LOGOUT_USER,
  });
}