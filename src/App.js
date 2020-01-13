import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import UsersPage from './components/UsersPage/UsersPage';
import HomePage from './components/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Switch>
        <Route exact path='/' render={()=><HomePage />} />
        <Route path='/home' render={()=><HomePage />} />
        <Route path='/users' render={()=><UsersPage />}/>
      </Switch>
    </div>
  );
}

export default App;
