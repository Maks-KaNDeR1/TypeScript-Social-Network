import React, { Component, ComponentType, Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route, Navigate } from 'react-router-dom';
import Calendar from './components/Calendar/Calendar';
import UsersContainer from './components/Users/UsersContainer';
import Music from './components/Music/Music';
import HeaderContainer from './components/Header/HeaderContainer';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer'
import { withRouter } from './hoc/WithRouter'
import { compose } from 'redux';
import { AppRootStateType } from './redux/redux-store';
import Preloader from './components/common/Preloader/Preloader';
import { Login } from './components/Login/Login';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

type PropsType = {
  initializeApp: () => void
  initialized: boolean
  isAuth: boolean
}

class App extends Component<PropsType, PropsType> {

  componentDidMount() {
    this.props.initializeApp()
  }



  render() {
    if (!this.props.initialized) {
      return <div
        style={{ position: 'fixed', top: '30%', textAlign: 'center', width: '100%' }}>
        <Preloader />
      </div>
    }
  
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path='/' element={<Navigate to={"/profile"} />} />
              <Route path="/profile/*" element={<ProfileContainer />} />
              <Route path="/profile/:userId" element={<ProfileContainer />} />
              <Route path="/dialogs/*" element={<DialogsContainer />} />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/music" element={<Music />} />
              <Route path="/404" element={<h1 style={{ textAlign: 'center' }} >404: PAGE NOT FOUND</h1>} />
              <Route path="/*" element={<Navigate to='404' />} />
            </Routes>
          </Suspense>
        </div>
      </div >
    );

  }

}

const mapStateToProps = (state: AppRootStateType) => ({
  initialized: state.app.initialized,
  isAuth: state.auth.isAuth
})

export default compose<ComponentType>(
  connect(mapStateToProps, { initializeApp }),
  withRouter,
)(App)
