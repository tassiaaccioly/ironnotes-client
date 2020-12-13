import React from 'react';
import "./App.css";
import NavBar from '../components/navbar/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";
import Greetings from '../components/greetings/Greetings';
import { BrowserRouter, Route, Link } from "react-router-dom"; 
import Login from '../components/login/Login';
import SignUp from '../components/signup/SignUp';

function App() {
  return <div className="App">
    <NavBar />
    <Route exact path='/' component={Greetings} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/signup' component={SignUp} />
  </div>;
}


export default App;
