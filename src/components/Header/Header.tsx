import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="title-container">
        <h1 className="app-title app-title--long">PokéManager</h1>
        <h1 className="app-title app-title--short">PkManager</h1>
      </div>
    </header>
  );
};

export default Header;
