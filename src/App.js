import './App.css';
// is the react import below necessary?
import React from 'react';
import { useState } from 'react';
import PlantList from './PlantList';

function App() {
  const [beeSize, setBeeSize] = useState(50);
  const [flowerSize, setFlowerSize] = useState(50);
  const [buttonSize] = useState(75);
  const [plants, setPlants] = useState(['rosette', 'blossom', 'hibiscus', 'sunflower', 'tulip']);

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

  return (
    <div className="App">
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
      <div className="dayOrNight">
        <p>background color shifts on click/ sound plays</p>
        <button style={{ fontSize: `${buttonSize}px` }}>🌞 or 🌚</button>
      </div>
      <div className="garden"></div>
      <button onClick={handleTulipClick}>🌷 Add Tulips 🌷</button>
      <button onClick={handleSunflowerClick}>🌻 Add Sunflowers 🌻</button>
      <button onClick={handleHibiscusClick}>🌺 Add Hibiscus 🌺</button>
      <button onClick={handleBlossomClick}>🌸 Add Blossoms 🌸</button>
      <button onClick={handleRosetteClick}>🏵️ Add Rosettes 🏵️</button>
      <p>where the garden grows</p>
      <PlantList plants={plants} />
    </div>
  );
}

export default App;
