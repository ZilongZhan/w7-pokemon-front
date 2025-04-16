import { Outlet } from "react-router";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <main className="main-container">
        <aside className="main-container__aside">
          <Navigation />
        </aside>
        <div className="main-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default App;
