import React from 'react';

export default function Plant({ plant }) {
  return (
    <div>
      {plant === 'tulip' && '🌷'}
      {plant === 'sunflower' && '🌻'}
      {plant === 'hibiscus' && '🌺'}
      {plant === 'blossom' && '🌸'}
      {plant === 'rosette' && '🏵️'}
    </div>
  );
}
