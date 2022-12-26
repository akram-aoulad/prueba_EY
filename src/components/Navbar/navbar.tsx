import React from 'react'
import { NavLink } from 'react-router-dom'
import { randomInteger } from '../DiezPokemons/DiezPokemons.service'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
            to="/">
            PokeList
          </NavLink>
          <NavLink className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
            to={`/pokemon/${randomInteger(0, 700)}`}>
            Pokemon (Pikachu by default)
          </NavLink>
        </div>
      </div>
    </nav>
  )
}