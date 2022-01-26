import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { RootStateType } from './redux/state';
import store from './redux/redux-store';
// import { renderTree } from './render';


export const renderTree = (state: RootStateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        
        <App state={state} dispatch={store.dispatch.bind(store)} />
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

renderTree(store.getState())

store.subscribe( () => {
  let state = store.getState()
  renderTree(state)
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
