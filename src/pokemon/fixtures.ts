import { Pokemon } from "./types";

const plusle: Pokemon = {
  id: "1",
  pokeIndex: 311,
  name: "Plusle",
  types: ["electric"],
  abilities: ["Plus", "Lightning Rod"],
  imageUrl: "http://plusle.com/plusle.webp",
  imageAlt: "Pixelart of Plusle",
  isCaptured: true,
  description:
    "Plusle loves to cheer on its partners. Whenever it sees its partner in trouble, this Pokémon gives off a spark from its body.",
  favoriteFood: "Sweet berries full of electricity",
  habitat: "Grassy fields and open plains",
};

const minun: Pokemon = {
  id: "2",
  pokeIndex: 312,
  types: ["electric"],
  abilities: ["Minus", "Volt absorb"],
  name: "Minun",
  imageUrl: "http://minun.com/minun.webp",
  imageAlt: "Pixelart of Minun",
  isCaptured: false,
  description:
    "Minun is more concerned about cheering on its teammates than about its own safety. It energizes its allies by creating showers of sparks.",
  favoriteFood: "Tangy berries rich in electrolytes",
  habitat: "Grassy fields and meadows",
};

export { plusle, minun };
