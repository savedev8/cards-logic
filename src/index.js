import 'bootstrap/dist/css/bootstrap.css';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={store}>
        <App />
        </Provider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
)

