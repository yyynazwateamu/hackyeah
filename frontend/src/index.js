import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import combinedReducer from '@reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(
	combinedReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);