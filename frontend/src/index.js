import ReactDOM from 'react-dom';
import Routes from './routes';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import combinedReducer from '@reducers';

const store = createStore(combinedReducer);

ReactDOM.render(
	<Provider store={store}>
		<Routes />
	</Provider>,
	document.getElementById('root')
);