import React, { useState } from 'react';
import './App.css';

function App() {
  const [bgColor, setBgColor] = useState('');

  const changeBackgroundColor = (color) => {
    setBgColor(color);
  };

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <h1>Background Changer App</h1>
      <div className="buttons-container">
        <button className="btn-blue" onClick={() => changeBackgroundColor('#003049')}>Blue</button>
        <button className="btn-purple" onClick={() => changeBackgroundColor('#8338ec')}>Purple</button>
        <button className="btn-lightblue" onClick={() => changeBackgroundColor('#669bbc')}>Light Blue</button>
        <button className="btn-pink" onClick={() => changeBackgroundColor('#ff8fab')}>Pink</button>
      </div>
    </div>
  );
}

export default App;
