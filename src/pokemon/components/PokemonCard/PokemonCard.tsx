import { useNavigate } from "react-router";
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
  const { removePokemon, capturePokemon, releasePokemon } = usePokemons();
  const navigate = useNavigate();

  const handleRemovePokemon = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ): void => {
    event.stopPropagation();

    removePokemon(id);
  };

  const handleCapturePokemon = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ): void => {
    event.stopPropagation();

    capturePokemon(id);
  };

  const handleReleasePokemon = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ): void => {
    event.stopPropagation();

    releasePokemon(id);
  };

  const handleViewDetails = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ): void => {
    event.stopPropagation();

    navigate(`/pokemon/${name}`);
  };

  return (
    <article
      className="pokemon"
      tabIndex={0}
      onClick={handleViewDetails}
      aria-label={`View details of ${name}`}
    >
      {isCaptured && (
        <img
          className="pokemon__captured"
          src="pokeball.svg"
          alt="Pokeball icon"
          aria-label="You have this pokemon"
          width={15}
          height={15}
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
        {isCaptured ? (
          <Button modifier="square" action={handleReleasePokemon}>
            Release
          </Button>
        ) : (
          <Button modifier="square" action={handleCapturePokemon}>
            Capture
          </Button>
        )}
      </div>
      <Button
        action={handleRemovePokemon}
        modifier="remove"
        aria-label={`Remove ${name}`}
      >
        X
      </Button>
    </article>
  );
};

export default PokemonCard;
