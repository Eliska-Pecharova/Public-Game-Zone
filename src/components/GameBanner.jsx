import "./GameBanner.css";
import { useState } from "react";

const GameBanner = () => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <div className="game-banner-desktop">
      {/* Šipky jako overlay */}
      <button className="arrow left" aria-label="Předchozí">
        <img src="/icons/arrow-left-green.png" alt="Předchozí" />
      </button>

      <div className="banner-row">
        <a
          href="https://worldofwarships.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/world-of-warships.jpg" alt="World of Warships" />
        </a>
        <a
          href="https://diceworldgame.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/dice-world.jpg" alt="Dice World" />
        </a>
        <a
          href="https://jokercards.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/cards.jpg" alt="Joker Cards" />
        </a>
        <a
          href="https://classiccheckers.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/dama.jpg" alt="Classic Checkers" />
        </a>
      </div>

      <button className="arrow right" aria-label="Další">
        <img src="/icons/arrow-right-green.png" alt="Další" />
      </button>
    </div>
  );
};

export default GameBanner;
