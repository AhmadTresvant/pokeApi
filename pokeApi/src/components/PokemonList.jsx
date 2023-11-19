import React, { useEffect, useState } from 'react';

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const result = await response.json();
        setPokemon(result.results);
      } catch (error) {
        console.error('Error fetching Pokemon:', error);
      }
    };

    fetchPokemon();
  }, []);

  const fetchPokemonDetails = async (pokemonName) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const result = await response.json();
      setSelectedPokemon(result);
    } catch (error) {
      console.error('Error fetching Pokemon details:', error);
    }
  };

  const handleBackClick = () => {
    setSelectedPokemon(null);
  };

  return (
    <div>
      <h2>Pokemon List</h2>
      {selectedPokemon ? (
        <div>
          <button onClick={handleBackClick}>Back</button>
          <h2>Pokemon Details</h2>
          <div>
            <h3>{selectedPokemon.name}</h3>
            <img
              src={selectedPokemon.sprites.front_default}
              alt={`${selectedPokemon.name} sprite`}
            />
            <p>Height: {selectedPokemon.height}</p>
            <p>Weight: {selectedPokemon.weight}</p>
            {/* Add more details as needed */}
          </div>
        </div>
      ) : (
        <>
          <h4>Click on a Pokemon for details!</h4>
          <ul>
            {pokemon.map((poke, index) => (
              <li onClick={() => fetchPokemonDetails(poke.name)} key={index}>
                {poke.name}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default PokemonList;