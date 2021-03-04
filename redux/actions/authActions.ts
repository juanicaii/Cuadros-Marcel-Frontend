import axios from 'axios';
import * as actionTypes from '../../utils/actionTypes';
import * as utils from '../../utils/constants';

const authActions = {
  createNewUser: (data) => async () => {
    const response = await axios.post(process.env.NEXT_PUBLIC_URL_PATH + utils.PATH_REGISTER, data);

    return response;
  },
  getUserData: (data) => async (dispatch) => {

    const headers = { Authorization: `Token ${data.access_token}` };
    const response = await axios.get(process.env.NEXT_PUBLIC_URL_PATH + utils.PATH_USER_ME, {
      headers,
    });

    dispatch({
      type: actionTypes.USER_INFO,
      payload: {
        id: response.data.id,
        firstName: response.data.first_name,
        lastName: response.data.last_name,
        email: response.data.email,
        auth_token: data.access_token,
      },
    });
    return response;
  },
  loginUser: (data) => async (dispatch) => {
    const response = await axios.post(process.env.NEXT_PUBLIC_URL_PATH + utils.PATH_LOGIN, data);

    dispatch({
      type: actionTypes.USER_INFO,
      payload: {
        id: response.data.id,
        firstName: response.data.first_name,
        lastName: response.data.last_name,
        email: response.data.email,
        auth_token: response.data.auth_token,
      },
    });
    return response;
  },
  logoutUser: () => async (dispatch) => {
    dispatch({
      type: actionTypes.LOGOUT_USER,
    });
  },
};

export default authActions;
