import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import Calendar from './components/Calendar/Calendar';
import UsersContainer from './components/Users/UsersContainer';



function App() {

  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile" element={
            <Profile />} />
          <Route path="/dialogs" element={
            <DialogsContainer  />} />
          <Route path="/users" element={
            <UsersContainer  />} />
          <Route path="/calendar" element={
            <Calendar />} />
        </Routes>
      </div>
    </div>
  );
}



export default App;
