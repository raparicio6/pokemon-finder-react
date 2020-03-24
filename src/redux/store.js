import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import pokemons from './pokemons/reducer';

const middlewares = [thunk];
const enhancers = [];
enhancers.push(applyMiddleware(...middlewares));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle

const reducer = combineReducers({
  pokemons
});

export default createStore(reducer, composeEnhancers(...enhancers));
