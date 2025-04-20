import usePokemons from "../../hooks/usePokemons";
import { Pokemon } from "../../types";
import Button from "../shared/Button/Button";

import "./PokemonCard.css";

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({
  pokemon: { id, pokeIndex, name, imageUrl, imageAlt, isCaptured, types },
}) => {
  const { removePokemon } = usePokemons();

  const handleOnClick = () => {
    removePokemon(id);
  };

  return (
    <article className="pokemon">
      {isCaptured && (
        <img
          className="pokemon__captured"
          src="pokeball.svg"
          alt="Pokeball icon"
          aria-label="You have this pokemon"
          width={192}
          height={192}
        />
      )}
      <img
        className="pokemon__image"
        src={imageUrl}
        alt={imageAlt}
        width={96}
        height={96}
      />
      <div className="pokemon-data">
        <div className="pokemon-identifiers">
          <span className="pokemon__index">Nº{pokeIndex}</span>
          <h3 className="pokemon__name">{name}</h3>
        </div>
        <div className="pokemon-details">
          <span className="pokemon__types">Types: {types.join(", ")}</span>
        </div>
      </div>
      <Button action={handleOnClick} modifier="remove">
        X
      </Button>
    </article>
  );
};

export default PokemonCard;
