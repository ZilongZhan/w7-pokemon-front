import { Pokemon } from "./types";

const plusle: Pokemon = {
  id: "1",
  pokeIndex: 311,
  name: "Plusle",
  types: ["electric"],
  abilities: ["Plus", "Lightning Rod"],
  imageUrl: "http://plusle.com/plusle.webp",
  isCaptured: false,
};

const minun: Pokemon = {
  id: "2",
  pokeIndex: 312,
  types: ["electric"],
  abilities: ["Minus", "Volt absorb"],
  name: "Minun",
  imageUrl: "http://minun.com/minun.webp",
  isCaptured: false,
};

export { plusle, minun };
