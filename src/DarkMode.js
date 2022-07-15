import React from 'react';
import CustomButton from './CustomButton';

export default function DarkMode({ mode, onClick, playSound, buttonSize }) {
  return (
    <div className="dayOrNight">
      <p>{mode === true ? 'Dark' : 'Light'}</p>
      <CustomButton variant="outlined" style={{ fontSize: `${buttonSize}px` }} onClick={onClick}>
        🌞 or 🌚
      </CustomButton>
      <CustomButton variant="outlined" style={{ fontSize: `${buttonSize}px` }} onClick={playSound}>
        🧚‍♀️ Ambiance 🧚‍♀️
      </CustomButton>
    </div>
  );
}
