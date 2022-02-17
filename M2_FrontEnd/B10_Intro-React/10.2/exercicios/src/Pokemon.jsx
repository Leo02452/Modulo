import React, {Component} from "react";
import PropTypes from 'prop-types';
import './Pokemon.css'

class Pokemon extends Component {
  render () {
     const { name, type, averageWeight, image } = this.props.teste;

    return (
      <div className="pokemon">
        <div className="pokemon-text">
          <span>Nome: {name}</span>
          <span>Tipo: {type}</span>
          <span>Peso: {averageWeight.value} {averageWeight.measurementUnit}</span>
        </div>
        <img alt="pokemon" src={image} />
      </div>
    )
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  averageWeight: {
    value: PropTypes.number,
    measurementUnit: PropTypes.string
    },
  image: PropTypes.string,
  }

export default Pokemon;
