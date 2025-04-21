import { useNavigate } from "react-router";
import usePokemons from "../../hooks/usePokemons";
import { Pokemon } from "../../types";
import Button from "../shared/Button/Button";

import "./PokemonDetailsCard.css";

interface PokemonDetailsCardProps {
  pokemon: Pokemon;
}

const PokemonDetailsCard: React.FC<PokemonDetailsCardProps> = ({
  pokemon: {
    id,
    pokeIndex,
    types,
    name,
    isCaptured,
    imageAlt,
    imageUrl,
    abilities,
    description,
    favoriteFood,
    habitat,
  },
}) => {
  const { removePokemon, capturePokemon, releasePokemon } = usePokemons();
  const navigate = useNavigate();

  const handleRemovePokemon = (): void => {
    removePokemon(id);

    navigate("/home");
  };

  const handleCapturePokemon = (): void => {
    capturePokemon(id);
  };

  const handleReleasePokemon = (): void => {
    releasePokemon(id);
  };

  return (
    <article className="pokemon-info">
      {isCaptured && (
        <img
          className="pokemon__captured"
          src={"../pokeball.svg"}
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
          <p>
            <b className="pokemon-info__label">Description:</b>
            {description}
          </p>
          <span className="pokemon__types">
            <b className="pokemon-info__label">Types:</b> {types.join(", ")}
          </span>
          <span>
            <b className="pokemon-info__label">Abilities:</b>{" "}
            {abilities.join(", ")}
          </span>
          <span>
            <b className="pokemon-info__label">Favorite food:</b>
            {favoriteFood}
          </span>
          <span>
            <b className="pokemon-info__label">Habitat:</b>
            {habitat}
          </span>
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

export default PokemonDetailsCard;
