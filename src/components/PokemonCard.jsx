import PropTypes from "prop-types";


function PokemonCard({pokemon}) {
    return (
        <figure>
          {pokemon.imgSrc ? <img src={pokemon.imgSrc} /> : <p>???</p>}
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    )
   

  }
  PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string,
        imgSrc: PropTypes.string,
    }),
}
  export default PokemonCard;
