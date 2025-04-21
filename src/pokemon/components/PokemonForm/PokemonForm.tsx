import usePokemonForm from "../../hooks/usePokemonForm";
import Button from "../shared/Button/Button";
import "./PokemonForm.css";

const PokemonForm: React.FC = () => {
  const {
    pokemonData: {
      imageUrl,
      isCaptured,
      name,
      pokeIndex,
      description,
      favoriteFood,
      habitat,
    },
    handleOnChange,
    handleOnSubmit,
    isValidData,
  } = usePokemonForm();

  const pokeIndexValue = pokeIndex === 0 ? "" : pokeIndex;

  return (
    <form className="pokemon-form" onSubmit={handleOnSubmit}>
      <h3 className="pokemon-form__title">Pokémon info</h3>
      <fieldset className="pokemon-form__fieldset">
        <div className="pokemon-form__group">
          <label htmlFor="name">Name:</label>
          <input
            className="pokemon-form__input"
            id="name"
            type="text"
            value={name}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="pokemon-form__group">
          <label htmlFor="pokeIndex">Pokédex Number:</label>
          <input
            className="pokemon-form__input"
            id="pokeIndex"
            type="number"
            value={pokeIndexValue}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="pokemon-form__group">
          <label htmlFor="imageUrl">Link to image:</label>
          <input
            className="pokemon-form__input"
            id="imageUrl"
            type="url"
            value={imageUrl}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="pokemon-form__group">
          <label htmlFor="imageUrl">Habitat:</label>
          <input
            className="pokemon-form__input"
            id="habitat"
            type="text"
            value={habitat}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="pokemon-form__group">
          <label htmlFor="imageUrl">Favorite food:</label>
          <input
            className="pokemon-form__input"
            id="favoriteFood"
            type="text"
            value={favoriteFood}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="pokemon-form__group">
          <label htmlFor="imageUrl">Description:</label>
          <input
            className="pokemon-form__input"
            id="description"
            type="text"
            value={description}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="pokemon-form__group pokemon-form__group--horizontal">
          <input
            className="pokemon-form__input pokemon-form__input--checkbox"
            id="isCaptured"
            type="checkbox"
            checked={isCaptured}
            onChange={handleOnChange}
          />
          <label htmlFor="isCaptured">Captured</label>
        </div>
        <Button modifier="square" disabled={!isValidData}>
          Register
        </Button>
      </fieldset>
    </form>
  );
};

export default PokemonForm;
