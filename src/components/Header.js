import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="header1">
          <Link to="/">
            <img
              src="https://banner2.cleanpng.com/20180207/hpq/kisspng-game-controller-scalable-vector-graphics-video-gam-video-game-controller-5a7b6c093b7b32.4982172515180380252436.jpg"
              alt="Logo GamePad"
            />
          </Link>
          <h1>GamePad</h1>
        </div>
        <div className="header2">
          <Link>
            <button className="header-button my-collection">
              My collection
            </button>
          </Link>

          <Link>
            <button className="header-button login">Login</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
