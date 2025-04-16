import "./Navigation.css";

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li>
          <a className="navigation__link active" href="/home">
            Home
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
