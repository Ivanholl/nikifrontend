import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

import Layout from './pages/Layout';
import * as Actions from './redux/actions';

function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(Actions.getContent('en'));
	});

      return (
          <div className="App">
            <Layout />
          </div>
      );
}

export default App;
