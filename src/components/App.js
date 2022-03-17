import React from 'react';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import "../assets/css/App.css";
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <React.Fragment>
        <BrowserRouter>
          <div id="wrapper">
            <Sidebar />
            <Dashboard />
          </div>
        </BrowserRouter>
    </React.Fragment>
  );
} 

export default App;
