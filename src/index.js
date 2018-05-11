import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux';
import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import './style.css';

import NavBar 								from "./common/navBar";
import Container							from "./common/container";
import registerServiceWorker  from "./registerServiceWorker";
import myR 										from "./reducers/myReducer";


const reducer = combineReducers( {reducer: myR, form: formReducer} );
const store = createStore(reducer);
class App extends React.Component {
	render() {
		return (
			<Provider store={store} >
				<div>
					<NavBar />
					<Container />
				</div>
			</Provider>
		);
	}
}

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById("root")
);

registerServiceWorker();