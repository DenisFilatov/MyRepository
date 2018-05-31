import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { newStore } from './stores/store';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router, Route, Redirect } from 'react-router-dom';
import App from './App';
import EditGallery from './components/edit-gallery/edit-gallery';
import SelectImages from './components/select-images/select-images';
import ShowSelectedImages from './components/show-selected-images/show-selected-images';
import { get } from './utils/fetcher.js';
import { setAppData } from './action';

const store = newStore();
const history = createBrowserHistory();

get('mockapi/app.json').then(data => {
	store.dispatch(setAppData(data));
});

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<div>
				<Redirect from="/" to="/home" />
				<Route path="/home" component={App} />
				<Route path="/edit" component={EditGallery} />
				<Route path="/select" component={SelectImages} />
				<Route path="/show" component={ShowSelectedImages} />
			</div>
		</Router>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
