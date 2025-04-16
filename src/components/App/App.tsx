import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <div className="main-content">
        <aside className="main-content__aside">
          <Navigation />
        </aside>
      </div>
    </div>
  );
};

export default App;
