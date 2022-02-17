import React from 'react';
import Pokedex from './Pokedex';


class App extends React.Component {
  render() {
    return (
      <div className='pokemons-container'>
        <Pokedex />
      </div>
    );
  }
}

export default App;
