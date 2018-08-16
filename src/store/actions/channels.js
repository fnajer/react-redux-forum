import axios from 'axios';

import config from '../../config';

export const GET_CHANNELS = 'GET_CHANNELS';

const getChannels = () => async (dispatch, getState) => {
  const responce = await axios.get(`${config.apiUrl}/channels`);

  dispatch({
    type: GET_CHANNELS,
    payload: responce.data,
  });
};

export default getChannels;