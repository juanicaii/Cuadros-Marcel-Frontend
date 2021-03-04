import * as actionTypes from '../../utils/actionTypes';

const cartActions = {
  addNewProduct: (cant, product) => async (dispatch) => {
    dispatch({
      type: actionTypes.ADD_PRODUCT,
      payload: {
        cant,
        product,
      },
    });
  },
  addMoreCant: (id, cant) => async (dispatch) => {
    dispatch({
      type: actionTypes.ADD_MORE_CANT,
      payload: {
        id,
        cant,
      },
    });
  },
};

export default cartActions;
