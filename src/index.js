import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
// import 'normalize.css/normalize.css'
import { Provider } from "react-redux";
import App from './App';
import store from './store'
import {GlobalStyle} from './global'
ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <GlobalStyle />
            <App />
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
