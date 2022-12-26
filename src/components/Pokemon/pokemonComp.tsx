import React, { useEffect, useState } from 'react'
import { PokemonDetails, PokemonHabilities, PokemonObject, PokemonStats } from '../DiezPokemons/DiezPokemons.interfaces'
import './styles.scss'

const PokemonComp = (props:PokemonObject) => {


  const [pokemonsArray, setpokemonsArray] = useState(window.history.state?.usr ?? null);

  useEffect(() => {
    if (!pokemonsArray) {
      pokedetails();
    }
  }, [])

  async function pokedetails() {

    let array:PokemonDetails;

    fetch(`https://pokeapi.co/api/v2/pokemon/${props.id}`)
      .then(response => response.json())
      .then(data => {
        array = data;
        setpokemonsArray(array);
      })
      .catch(err => console.error(err))
  }

  if (!pokemonsArray) return <div>Loading...</div>
  return (
    <div className='pokemon'>
      <img className='pokemon-img' src={pokemonsArray.sprites.front_default} alt=""/>
      <div className='pokemon-chart'>
        <div>
          <div>
          <label>Id:</label> {pokemonsArray.id}
          </div>
          <div>
          <label>Name:</label> {pokemonsArray.name}
          </div>
          <div>
          <label>Order:</label> {pokemonsArray.order}
          </div>
          <div>
            <label>Height:</label> {pokemonsArray.height}
          </div>
          <div>
          <label>Weight:</label> {pokemonsArray.weight}
          </div>
          <div>
            <label>Base Experience:</label> {pokemonsArray.base_experience}
          </div>
        </div>
        <div><label>Habilidades</label> {
          //pokemonsArray.abilities.length > 0 ?  
            pokemonsArray.abilities.map((habilidad:PokemonHabilities, index: number) => {
              console.log(habilidad);
              return(<div className={`pokemon-${habilidad.ability.name}`}> 
                  <li>{habilidad.ability.name}</li>
                </div>
              )
            })
          //: <div>Este pokemon no tiene habilidades</div>
          }
        </div>
        <div><label>Estadísticas</label> {
          //pokemonsArray.stats.length > 0 ?  
            pokemonsArray.stats.map((stat:PokemonStats, index: number) => {
              console.log(stat);
              return (
                <div className={`pokemon-${stat.stat.name}`}>
                  <li><label>{stat.stat.name}:</label> {stat.base_stat}</li>
                </div>
                )
            })
          //: <div>Este pokemon no tiene estadaisticas</div>
          }
        </div>
      </div>
    </div>

  )
}

export default PokemonComp