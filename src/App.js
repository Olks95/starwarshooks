import React, { useState } from 'react';

import CharPicker from './components/CharPicker';
import Character from './components/Character';

const App = props => {
  const [ selectedChar, setSelectedChar ] = useState(1);
  const [ side, setSide ] = useState('light');
  const [ destroyed, setDestroyed ] = useState(false);

  const sideHandler = side => {
    setSide(side);
  };

  const charSelectHandler = event => {
    const charId = event.target.value;
    setSelectedChar(charId);
  };

  const destructionHandler = () => {
    setDestroyed(true);
  };

  let content = (
    <React.Fragment>
      <CharPicker
        side={side}
        selectedChar={selectedChar}
        onCharSelect={charSelectHandler}
      />
      <Character selectedChar={selectedChar} />
      <button onClick={sideHandler.bind(null, 'light')}>
        Light Side
      </button>
      <button onClick={sideHandler.bind(null, 'dark')}>Dark Side</button>
      {side === 'dark' && (
        <button onClick={destructionHandler}>DESTROY!</button>
      )}
    </React.Fragment>
  );

  if (destroyed) {
    content = <h1>Total destruction!</h1>;
  }
  return content;
}

export default App;
