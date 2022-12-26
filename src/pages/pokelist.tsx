import Diezpokemons from "../components/DiezPokemons/DiezPokemons";
import './pokelist.scss'

export const Pokelist = () => {
  return (
  <div className="container pokelist">
    <h1 className="header">Choose one pokemon.</h1>
    <Diezpokemons />
  </div>
  )
}

export default Pokelist;