import axios from 'axios';

import config from '../../config';

export const GET_CHANNELS = 'GET_CHANNELS';
export const GET_CHANNELS_LOADING = 'GET_CHANNELS_LOADING';
export const GET_CHANNELS_LOADED = 'GET_CHANNELS_LOADED';

const getChannels = () => async (dispatch, getState) => {
  dispatch({
    type: GET_CHANNELS_LOADING,
  });
  const responce = await axios.get(`${config.apiUrl}/channels`);

  dispatch({
    type: GET_CHANNELS,
    payload: responce.data,
  });

  dispatch({
    type: GET_CHANNELS_LOADED,
  });
};

export default getChannels;