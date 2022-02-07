import React from "react";
import PokemonType from '../PokemonType';
import PropTypes from 'prop-types';

const PokemonRow = ({ pokemon, onSelect }) => (
    <tr>
        <td>{pokemon.name.english}</td>
        <td>{pokemon.type.join(', ')}</td>
        <td>
            <button onClick={() => onSelect(pokemon)}>Detail</button>
        </td>
    </tr>
);

PokemonRow.protoTypes = {
    pokemon: PropTypes.arrayOf(PokemonType),
}

export default PokemonRow;