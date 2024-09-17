// src/App.js
import React, { useState } from 'react';
import Calculator from './components/Calculator';
import Form from './components/Form';
import ResumeBuilder from './components/ResumeBuilder';
import './App.css';

const App = () => {
  const [activeComponent, setActiveComponent] = useState('calculator');

  return (
    <div className="App">
      <nav>
        <button onClick={() => setActiveComponent('calculator')}>Calculator</button>
        <button onClick={() => setActiveComponent('form')}>Form</button>
        <button onClick={() => setActiveComponent('resume')}>Resume Builder</button>
      </nav>

      <div className="content">
        {activeComponent === 'calculator' && <Calculator />}
        {activeComponent === 'form' && <Form />}
        {activeComponent === 'resume' && <ResumeBuilder />}
      </div>
    </div>
  );
}

export default App;
