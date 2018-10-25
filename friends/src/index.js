import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  App  from './App';
import { Provider} from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { friendReducer } from './reducers';

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({

  })
: compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, logger))
const store = createStore(friendReducer, enhancer);



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
   document.getElementById('root')
);



