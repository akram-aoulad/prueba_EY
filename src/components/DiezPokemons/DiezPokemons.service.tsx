import { PokemonObject } from "./DiezPokemons.interfaces";

export function randomInteger(min:number, max:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
