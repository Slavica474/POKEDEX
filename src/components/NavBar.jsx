

function NavBar({pokemonIndex , setPokemonIndex, pokemonList}) {

  const handleNext = () => {
    setPokemonIndex(pokemonIndex + 1);
  };

  const handlePrevious = () => {
    setPokemonIndex(pokemonIndex - 1);
  };
  

  return (<>
    
    {pokemonIndex > 0 ? <button onClick={handlePrevious}>précédent</button>:null}
      {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleNext}>suivant</button>:null}
  </>) };

  export default NavBar