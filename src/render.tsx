import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, { RootStateType } from './redux/state';


export const renderTree = (state: RootStateType) => {
    ReactDOM.render(
      <React.StrictMode>
        <App  />
      </React.StrictMode>,
      document.getElementById('root')
    );
  }