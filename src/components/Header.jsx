import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="text">
        <h1>Public Games</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
          laborum alias corrupti, incidunt molestiae autem nostrum sint quo
          porro perspiciatis aliquid voluptates quisquam enim nam ipsum unde
          deserunt cupiditate corporis.
        </p>

        <div className="header-buttons">
          <button className="games-btn">GAMES</button>
          <button className="featured-btn">FEATURED</button>
        </div>
      </div>

      <div className="scroll-down">
        <img src="/icons/arrow-down.png" alt="Scroll down" />
      </div>
    </header>
  );
};

export default Header;
