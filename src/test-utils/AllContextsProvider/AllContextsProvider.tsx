import { PropsWithChildren } from "react";
import { MemoryRouter } from "react-router";
import PokemonContextProvider from "../../pokemon/context/PokemonContextProvider";

const AllContextsProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <PokemonContextProvider>
      <MemoryRouter>{children}</MemoryRouter>
    </PokemonContextProvider>
  );
};

export default AllContextsProvider;
