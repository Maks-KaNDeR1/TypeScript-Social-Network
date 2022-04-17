import React, { Component, ComponentType } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Calendar from './components/Calendar/Calendar';
import UsersContainer from './components/Users/UsersContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Music from './components/Music/Music';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer'
import { withRouter } from './hoc/WithRouter'
import { compose } from 'redux';
import { AppRootStateType } from './redux/redux-store';
import Preloader from './components/common/Preloader/Preloader';


type PropsType = {
  initializeApp: () => void
  initialized: boolean
}


class App extends Component<PropsType, PropsType> {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile/:userId" element={
              <ProfileContainer />} />
            <Route path="/profile/*" element={
              <ProfileContainer />} />
            <Route path="/dialogs/*" element={
              <DialogsContainer />} />
            <Route path="/users" element={
              <UsersContainer />} />
            <Route path="/login" element={
              <Login />} />
            <Route path="/calendar" element={
              <Calendar />} />
            <Route path="/music" element={
              <Music />} />
          </Routes>
        </div>
      </div>
    );

  }

}

const mapStateToProps = (state: AppRootStateType) => ({
  initialized: state.app.initialized
})

export default compose<ComponentType>(
  connect(mapStateToProps, { initializeApp }),
  withRouter,
)(App)
