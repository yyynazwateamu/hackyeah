import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import combinedReducer from '@reducers';

const store = createStore(
	combinedReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);