import './App.css';
// is the react import below necessary?
import React from 'react';
import { useState } from 'react';
import PlantList from './PlantList';
import DarkMode from './DarkMode';
import CustomButton from './CustomButton';

function App() {
  const [beeSize, setBeeSize] = useState(50);
  const [flowerSize, setFlowerSize] = useState(50);
  const [plants, setPlants] = useState(['rosette', 'blossom', 'hibiscus', 'sunflower', 'tulip']);
  const [mode, setMode] = useState(false);
  const nightAudio = new Audio('./night.mp3');
  const dayAudio = new Audio('./morning.mp3');
  const [buttonSize] = useState(50);

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
    setMode(!mode);
  }

  function stopSound() {
    dayAudio.pause();
    dayAudio.currentTime = 0;
    nightAudio.pause();
    nightAudio.currentTime = 0;
  }

  function playSound() {
    stopSound();
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
            <CustomButton variant="outlined" onClick={() => setBeeSize(beeSize + 20)}>
              Sip the Juice
            </CustomButton>
            <CustomButton variant="outlined" onClick={() => setBeeSize(beeSize - 20)}>
              Serve the Queen
            </CustomButton>
          </div>
        </div>
        <div className="pollinators">
          <p style={{ fontSize: `${flowerSize}px` }}>🌻</p>
          <div className="buttons">
            <CustomButton variant="outlined" onClick={() => setFlowerSize(flowerSize + 20)}>
              Gimme that H2O
            </CustomButton>
            <CustomButton variant="outlined" onClick={() => setFlowerSize(flowerSize - 20)}>
              Time to Deadhead
            </CustomButton>
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
        <CustomButton variant="outlined" className="gardenButtons" onClick={handleTulipClick}>
          🌷 Add Tulips 🌷
        </CustomButton>
        <CustomButton variant="outlined" className="gardenButtons" onClick={handleSunflowerClick}>
          🌻 Add Sunflowers 🌻
        </CustomButton>
        <CustomButton variant="outlined" className="gardenButtons" onClick={handleHibiscusClick}>
          🌺 Add Hibiscus 🌺
        </CustomButton>
        <CustomButton variant="outlined" className="gardenButtons" onClick={handleBlossomClick}>
          🌸 Add Blossoms 🌸
        </CustomButton>
        <CustomButton variant="outlined" className="gardenButtons" onClick={handleRosetteClick}>
          🏵️ Add Rosettes 🏵️
        </CustomButton>
      </div>
      <PlantList plants={plants} />
    </div>
  );
}

export default App;
