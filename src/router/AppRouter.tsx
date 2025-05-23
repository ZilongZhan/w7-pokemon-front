import { Navigate, Route, Routes } from "react-router";
import App from "../components/App/App";
import PokemonHomePage from "../pokemon/pages/PokemonHomePage/PokemonHomePage";
import PokemonFormPage from "../pokemon/pages/PokemonFormPage/PokemonFormPage";
import PokemonDetailsPage from "../pokemon/pages/PokemonDetailsPage/PokemonDetailsPage";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to="/home" />} />
        <Route path="/home" element={<PokemonHomePage />} />
        <Route path="/register-pokemon" element={<PokemonFormPage />} />
        <Route path="/pokemon/:name" element={<PokemonDetailsPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
