import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChangeUsername from "./components/ChangeUsername";
import LoginForm from "./components/LoginForm";
import RegisterUser from "./components/RegisterUser";
import ShowPassword from './components/ShowPassword';
import SmsApp from "./components/SmsApp";
import DisplaySecondValue from "./components/DisplaySecondValue";

function App() {
  return (
    <div className="App">
        <nav className='navbar navbar-dark bg-danger mb-3'>
            <a href='/'className='navbar-brand'> React Form Handling</a>
        </nav>
        <ChangeUsername/>
       <LoginForm/>
      <RegisterUser/>
      <ShowPassword/>
    <SmsApp/>
    <DisplaySecondValue/>

    </div>
  );
}

export default App;
