import React, { Component } from 'react';
import HomePage from './Components/HomePage/HomePage';
import RegisterPage from './Components/RegisterPage/RegisterPage';
import './App.css';
import LoginPage from './Components/LoginPage/LoginPage';
import Dashboardpage from './Components/DashboardPage/DashboardPage';
import Navbar from './Components/Navbar/Navbar';

export default class App extends Component {
  render() {
    return <div className="app"> 
<Dashboardpage/>
{/* <Navbar/> */}
    </div>
  }
}
