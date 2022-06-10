import React from 'react';

export default function DarkMode({ mode, onClick }) {
  return (
    <div className="dayOrNight">
      <p>Mode: {mode === true ? 'Dark' : 'Light'}</p>
      <button onClick={onClick}>🌞 or 🌚</button>
    </div>
  );
}
