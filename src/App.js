import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

import Layout from './pages/Layout';
import SecretLogin from "./pages/SecretLogin";
import * as Actions from './redux/actions';

export default function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		let lang = localStorage.getItem("language") || "en";
		dispatch(Actions.getContent(lang));
	});

	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/secretLogin">
						<SecretLogin />
					</Route>
					<Route path="/">
						<Layout />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
