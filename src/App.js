import React, { useEffect, useState } from 'react';
import './App.css';
import PokemonInfo from './components/PokemonInfo';
import PokemonFilter from './components/PokemonFilter';
import PokemonTable from './components/PokemonTable';
import PokemonContext from './PokemonContext';
import styled from '@emotion/styled';

const Title = styled.h1`
  text-align: center;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 1rem;
`;

const Container = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1rem;
`;

function App() {
  const [filter, filterSet] = useState("");
  const [selectedItem, selectedItemSet] = useState(null);
  const [pokemon, pokemonSet] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/pokemon.json")
    .then(response => response.json())
    .then(data => pokemonSet(data));
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        filter,
        pokemon,
        selectedItem,
        filterSet,
        pokemonSet,
        selectedItemSet,
      }}
    >
      <Container>
        <Title>Pokemon Search</Title>
        <TwoColumnLayout>
          <div>
            <PokemonFilter/>
            <PokemonTable/>
          </div>
          <PokemonInfo/>
        </TwoColumnLayout>
      </Container>
    </PokemonContext.Provider>
  );
}

export default App;
