import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, { RootStateType } from './redux/state';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/state';
// import { renderTree } from './render';


export const renderTree = (state: RootStateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

renderTree(store.getState())

store.subscribe(renderTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
