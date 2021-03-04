import * as actionTypes from '../../utils/actionTypes';

const initialState = {
  id: 0,
  firstName: '',
  lastName: '',
  email: '',
  auth_token: '',
  isUserLogged: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.USER_INFO:
      return {
        id: action.payload.id,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        auth_token: action.payload.auth_token,
        isUserLogged: true,
      };
    case actionTypes.LOGOUT_USER:
      return {
        ...state,
        ...initialState,
      };

    default:
      return state;
  }
};

export default user;
