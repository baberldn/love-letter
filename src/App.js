import React, { useState } from 'react';
import './App.css';

function App() {
 
  const [isOpen, setIsOpen] = useState(false);


  const openEnvelope = () => {
    setIsOpen(true);
  };

 
  const closeEnvelope = () => {
    setIsOpen(false);
  };

  return (
    <div className="envlope-wrapper">
      <div id="envelope" className={isOpen ? 'open' : 'close'}>
        <div className="front flap"></div>
        <div className="front pocket"></div>
        <div className="letter">
          <div className="words line1"></div>
          <div className="words line2"></div>
          <div className="words line3"></div>
          <div className="words line4"></div>
        </div>
        <div className="hearts">
          <div className="heart a1"></div>
          <div className="heart a2"></div>
          <div className="heart a3"></div>
        </div>
      </div>

      <div className="reset">
        <button id="open" onClick={openEnvelope}>
          Open
        </button>
        <button id="reset" onClick={closeEnvelope}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
