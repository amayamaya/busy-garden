import './App.css';
// is the react import below necessary?
import React from 'react';
import { useState } from 'react';

function App() {
  const [beeSize, setBeeSize] = useState(50);
  const [flowerSize, setFlowerSize] = useState(50);

  return (
    <div className="App">
      <div className="pollinator">
        <p style={{ fontSize: `${beeSize}px` }}>🐝</p>
        <div className="buttons">
          <button onClick={() => setBeeSize(beeSize + 20)}>Sip Some Juice</button>
          <button onClick={() => setBeeSize(beeSize - 20)}>Serve the Queen</button>
        </div>
      </div>
      <div className="pollinator">
        <p style={{ fontSize: `${flowerSize}px` }}>🌻</p>
        <div className="buttons">
          <button onClick={() => setFlowerSize(flowerSize + 20)}>Gimme that H2O</button>
          <button onClick={() => setFlowerSize(flowerSize - 20)}>Time to Deadhead</button>
        </div>
      </div>
    </div>
  );
}

export default App;
