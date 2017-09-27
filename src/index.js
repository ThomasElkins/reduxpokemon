import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import pokemonState from './reducers/getPokemon';
import promiseMiddleware from 'redux-promise-middleware'

const store = createStore(pokemonState, applyMiddleware(logger, promiseMiddleware))



ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
