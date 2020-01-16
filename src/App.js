import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import UsersPageContainer from './components/UsersPage/UsersPageContainer';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Switch>
        <Route exact path='/' render={()=><HomePage />} />
        <Route path='/home' render={()=><HomePage />} />
        <Route path='/posts' render={()=><UsersPageContainer />}/>
      </Switch>
    </div>
  );
}

export default App;
