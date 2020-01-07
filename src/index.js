import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/Header";
import EmpState from "./contexts/EmpState";
import './index.css';


ReactDOM.render(
  <EmpState>
    <Header />
  </EmpState>,
  document.getElementById('root'));
