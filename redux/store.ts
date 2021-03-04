import thunk from 'redux-thunk';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import { MakeStore, createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import user from './reducers/users';
import cart from './reducers/cart';

const reducerRoot = combineReducers({
  user,
  cart,
});

const makeStore: MakeStore = (context) =>
  createStore(reducerRoot, composeWithDevTools(applyMiddleware(thunk)));

export const wrapper = createWrapper(makeStore, { debug: true });
