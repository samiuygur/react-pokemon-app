import React from "react";
import styled from '@emotion/styled';
import { useContext } from "react";
import PokemonContext from "../PokemonContext";

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
  margin-bottom: 20px;
`;

const PokemonFilter = () => {
    const {filter, filterSet} = useContext(PokemonContext);
    return (
        <Input
            value={filter}
            onChange={(event) => filterSet(event.target.value)}
        />
    )
};

export default PokemonFilter;