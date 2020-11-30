import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div class="header-container">
        <Link to="/">
          <img
            src="https://banner2.cleanpng.com/20180207/hpq/kisspng-game-controller-scalable-vector-graphics-video-gam-video-game-controller-5a7b6c093b7b32.4982172515180380252436.jpg"
            alt="Logo GamePad"
          />
        </Link>
        <h2>GamePad</h2>
        <div class="search-input">
          <input type="text" placeholder="Rechercher des jeux" />
        </div>

        <Link>
          <button className="header-button my-collection">My collection</button>
        </Link>

        <Link>
          <button class="header-button login">Login</button>
        </Link>
      </div>
    </>
  );
};

export default Header;
