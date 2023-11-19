import { useState } from 'react'
import PokemonList from './components/PokemonList'
import './App.css'

function App() {
  const [selectedPokemonName, setselectedPokemonName] = useState(null);

  return (
    <>
        <PokemonList setselectedPokemonName={setselectedPokemonName} />
    </>
  );
}

export default App
