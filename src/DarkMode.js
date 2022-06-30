import React from 'react';

export default function DarkMode({ mode, onClick, playSound, buttonSize }) {
  return (
    <div className="dayOrNight">
      <p>{mode === true ? 'Dark' : 'Light'}</p>
      <button style={{ fontSize: `${buttonSize}px` }} onClick={onClick}>
        🌞 or 🌚
      </button>
      <button style={{ fontSize: `${buttonSize}px` }} onClick={playSound}>
        🧚‍♀️ Ambiance 🧚‍♀️
      </button>
    </div>
  );
}
