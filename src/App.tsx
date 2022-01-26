import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import { DispatchType, RootStateType } from './redux/state';
import DialogsContainer from './components/Dialogs/DialogsContainer';

type AppPropsType = {
  state: RootStateType
  dispatch: DispatchType
}

function App(props: AppPropsType) {

  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile" element={
            <Profile profilePage={props.state.profilePage} />} />
          <Route path="/dialogs" element={
            <DialogsContainer dialogsPage={props.state.dialogsPage} />} />
        </Routes>
      </div>
    </div>
  );
}



export default App;
