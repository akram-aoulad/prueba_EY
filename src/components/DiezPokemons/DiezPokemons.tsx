import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PokemonObject } from './DiezPokemons.interfaces';
import { randomInteger } from './DiezPokemons.service';
import './DiezPokemons.scss';


export const Diezpokemons = () => {

  const [pokemonsArray, setpokemonsArray] = useState([] as Array<PokemonObject>);

  useEffect(() => {
    //pokemon_name();
    getPkmn()

  }, [])

  /**
   * 
   * @description Obtiene lista de 10 pokemons random a través de llamada a API. 
   * En un primer desarrollo he hecho esta llamada a la api que solo devuelve nombre y url. 
   * Al querer poner la imagen, necesito toda la info de cada pokemon por lo tanto si tengo los datos no hace falta volver a invocarlos
   * Solo en la llamada del navbar.
   * 
   */
  /*function pokemon_name() {
    let array:PokemonObject[] = [];
    let num:number = randomInteger(0,700);
    fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
      .then(response => response.json())
      .then(data => {
        data.results.forEach((pokemon:PokemonObject) => {
          array.push(pokemon);
        })
        setpokemonsArray(array);
        console.log(data);
      })
      .catch(err => console.error(err))
  }*/


  const getPkmn = async () => {
    const fetches = Array.from({length: 10}, (_, i) => fetchPkmn())
    Promise.all(fetches).then(values => {
      setpokemonsArray(values)
    }).catch(err => console.log(err))
  } 

  const fetchPkmn = async () => {

    const num: number = randomInteger(0,700)
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
    const json = await data.json()
    return json
  }

  return (
    <div className="cont" data-testid="container">
      {
        pokemonsArray.length > 0 ? 
        pokemonsArray.map((obj:PokemonObject, index:number) => (
          <div className="list" id={`id_${index}`} data-testid={`id_${index}`}>
          <Link state={obj} to={`/pokemon/${obj.name}`} key={index} >
            <img width="250" height="250" src={(obj as any).sprites.front_default} alt="pokemonImage"/>
            {obj.name}
          </Link>
          </div>
        ))
        : <div data-testid="loader">Loading Pokemons...</div>
      }
      </div>
  )
}

export default Diezpokemons