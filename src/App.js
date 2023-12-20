
import './App.css';

import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';

// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');// this is used to identify whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1000)
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert('Dark mode is enabled','success');
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode is enabled','success');
    }
  }
  return (
    <>
    
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
    </div>
  
    
    
  </>);
}

export default App;
