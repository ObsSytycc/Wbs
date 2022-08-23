import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css';
import store from './store';
import {Provider} from 'react-redux';
import './styles/utils.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import "@fontsource/montserrat";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={store}>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
 </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
