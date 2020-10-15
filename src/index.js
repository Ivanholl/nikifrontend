import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import './css/index.css';
import App from './App';
import store from "./redux/store";
// import * as serviceWorker from './other/serviceWorker';

function handleScroll () {
    document.addEventListener('keydown', (event) => {
        // debugger
        let types = ["notranslate public-DraftEditor-content","textarea", "input", "text", "password", "file", "search", "email", "number", "date", "color", "datetime", "datetime-local", "month", "range", "search", "tel", "time", "url", "week"];
        let target = event.target.type || event.target.className;

        if (types.includes(target)) {
            return
        }
        let elm = document.getElementsByTagName("body")[0];
        let e = document.createEvent("MouseEvents");
        
        //down arrow
        if (event.keyCode === 40) {
            e.initMouseEvent('wheel' ,true,true, window,120,0,0,0,0,0,0,0,0,0,null);
            elm.dispatchEvent(e);

            //up arrow and backspace
        } else if (event.keyCode === 38 || event.keyCode === 8) {
            e.initMouseEvent('wheel' ,true,true, window, 0, 120,0,0,0,0,0,0,0,0,null);
            elm.dispatchEvent(e);
        }
    });
}
handleScroll()

ReactDOM.render(<React.StrictMode>
    <Provider store={store}>
        <App/>
    </Provider>
</React.StrictMode>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
