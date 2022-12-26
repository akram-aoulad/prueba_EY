//import Pokemon from "../components/DiezPokemons/DiezPokemons";

import React from 'react'
import { useParams } from 'react-router-dom';
import PokemonComp from '../components/Pokemon/pokemonComp';

const Pokemon = () => {
  const params = useParams();
    return (<>
      <PokemonComp id={params.pokemonid}></PokemonComp>
    </>
  )
}

export default Pokemon;