import React, {Component} from "react";
import pokemons from './data';
import Pokemon from "./Pokemon";

class Pokedex extends Component {
  render () {
    return (
      pokemons.map((pokemon) => <Pokemon teste={pokemon} key={pokemon.id}/>)
      // <Pokemon teste={pokemons[0]}/>
      );
  }
}

export default Pokedex;