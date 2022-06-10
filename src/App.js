import './App.css';
// is the react import below necessary?
import React from 'react';
import { useState } from 'react';
import PlantList from './PlantList';
import DarkMode from './DarkMode';

function App() {
  const [beeSize, setBeeSize] = useState(50);
  const [flowerSize, setFlowerSize] = useState(50);
  const [plants, setPlants] = useState(['rosette', 'blossom', 'hibiscus', 'sunflower', 'tulip']);
  const [mode, setMode] = useState(false);
  const nightAudio = new Audio('./night.mp3');
  const dayAudio = new Audio('./morning.mp3');
  const buttonSize = 50;

  function handleTulipClick() {
    plants.push('tulip');
    setPlants(plants.slice());
  }

  function handleSunflowerClick() {
    plants.push('sunflower');
    setPlants(plants.slice());
  }

  function handleHibiscusClick() {
    plants.push('hibiscus');
    setPlants(plants.slice());
  }

  function handleBlossomClick() {
    plants.push('blossom');
    setPlants(plants.slice());
  }

  function handleRosetteClick() {
    plants.push('rosette');
    setPlants(plants.slice());
  }

  function handleModeToggleClick() {
    stopSound();
    setMode(!mode);
  }

  function stopSound() {
    dayAudio.pause();
    dayAudio.currentTime = 0;
    nightAudio.pause();
    nightAudio.currentTime = 0;
  }

  function playSound() {
    if (mode) {
      nightAudio.play();
    } else {
      dayAudio.play();
    }
  }

  return (
    <div className={mode === false ? 'App' : 'App darkMode'}>
      <div className="beeVsFlower">
        <div className="pollinators">
          <p style={{ fontSize: `${beeSize}px` }}>🐝</p>
          <div className="buttons">
            <button onClick={() => setBeeSize(beeSize + 20)}>Sip Some Juice</button>
            <button onClick={() => setBeeSize(beeSize - 20)}>Serve the Queen</button>
          </div>
        </div>
        <div className="pollinators">
          <p style={{ fontSize: `${flowerSize}px` }}>🌻</p>
          <div className="buttons">
            <button onClick={() => setFlowerSize(flowerSize + 20)}>Gimme that H2O</button>
            <button onClick={() => setFlowerSize(flowerSize - 20)}>Time to Deadhead</button>
          </div>
        </div>
      </div>
      <DarkMode
        buttonSize={buttonSize}
        playSound={playSound}
        mode={mode}
        onClick={handleModeToggleClick}
      />
      <div className="garden">
        <button className="gardenButtons" onClick={handleTulipClick}>
          🌷 Add Tulips 🌷
        </button>
        <button className="gardenButtons" onClick={handleSunflowerClick}>
          🌻 Add Sunflowers 🌻
        </button>
        <button className="gardenButtons" onClick={handleHibiscusClick}>
          🌺 Add Hibiscus 🌺
        </button>
        <button className="gardenButtons" onClick={handleBlossomClick}>
          🌸 Add Blossoms 🌸
        </button>
        <button className="gardenButtons" onClick={handleRosetteClick}>
          🏵️ Add Rosettes 🏵️
        </button>
      </div>
      <PlantList plants={plants} />
    </div>
  );
}

export default App;
