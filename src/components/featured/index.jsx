import React from 'react';

import Carrousel from './Carrousel';
import TimeUntil from './TimeUntil'

function Featured() {
  return (
    <div style={{ positions: 'relative' }}>
      <Carrousel />
      <div className='artist_name'>
        <div className='wrapper'>Ariana Grande</div>
      </div>
      <TimeUntil />
    </div>
  );
}

export default Featured;
