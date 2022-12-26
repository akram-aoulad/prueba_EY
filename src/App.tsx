import React from 'react';
import { Routes, Route } from "react-router-dom"
import { Pokelist } from "./pages/pokelist"
import Pokemon from "./pages/pokemon";
import { Navbar } from './components/Navbar/navbar';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path='/' element={<Pokelist />}></Route>
          <Route path='/pokemon/:pokemonid' element={<Pokemon />}></Route>
        </Routes>
    </div>
  );
}

export default App;