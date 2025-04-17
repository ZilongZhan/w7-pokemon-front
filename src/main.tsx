import { BrowserRouter } from "react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./router/AppRouter";
import PokemonContextProvider from "./pokemon/context/PokemonContextProvider";

import "@fontsource/press-start-2p/index.css";
import "./styles/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PokemonContextProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </PokemonContextProvider>
  </StrictMode>,
);
