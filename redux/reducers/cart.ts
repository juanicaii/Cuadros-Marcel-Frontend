import * as actionTypes from '../../utils/actionTypes';

const initialState = {
  cant: 0,
  products: [],
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT:
      if (!action.payload.product) {
        return {
          cant: action.payload.cant,
          products: [...state.products],
        };
      }
      return {
        cant: action.payload.cant,
        products: [...state.products, action.payload.product],
      };

    case actionTypes.ADD_MORE_CANT:
      const products = state.products.map((product) =>
        product.id === action.payload.id
          ? {
              id: product.id,
              name: product.name,
              image: product.image,
              cant: product.cant + action.payload.cant,
              price: product.price,
            }
          : product
      );
      console.log(action);

      return {
        cant: state.cant + action.payload.cant,
        products,
      };

    default:
      return state;
  }
};

export default cart;
