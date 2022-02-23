import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Calendar from './components/Calendar/Calendar';
import UsersContainer from './components/Users/UsersContainer';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Music from './components/Music/Music';



function App() {

  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile/:userId" element={
            <ProfileContainer />} />
          <Route path="/profile/*" element={
            <ProfileContainer />} />
          <Route path="/dialogs/*" element={
            <DialogsContainer  />} />
          <Route path="/users" element={
            <UsersContainer  />} />
          <Route path="/calendar" element={
            <Calendar />} />
          <Route path="/music" element={
            <Music />} />
        </Routes>
      </div>
    </div>
  );
}



export default App;
