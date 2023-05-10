import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import { Link } from 'react-router-dom';

function App() {
  const [darkMode, setMode] = useState(false);
  const [alert, setAlert] = useState(null);
  let showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
      
      <Router>
      <Navbar title="TextUtils" aboutTxt="AAAA" />
      <Alert alert={alert} />

        <Routes>

          <Route exact path="/" element={<TextForm showalert={showalert} heading="Enter the text to analyze below" />} />
          <Route path="/about" element={<About />} />

        </Routes>
      </Router>
    </>
  );
}
export default App;
