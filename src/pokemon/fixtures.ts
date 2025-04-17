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
};

export { plusle, minun };
