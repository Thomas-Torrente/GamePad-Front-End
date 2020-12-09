import React from "react";
import parse from "html-react-parser";
// parse permet d'enlever et de mettre en forme si dans le text il y a du html en dur
import StarsRatting from "./StarsRating";

import { Link } from "react-router-dom";

const OneGame = ({ game, token, setUser, sugestGame, data }) => {
  // console.log(data);

  return (
    <>
      <h1 className="title-center">{game.name_original}</h1>
      <div className="oneGame">
        <div className="container1game">
          {" "}
          <div className="img-oneGame">
            <img src={game.background_image} alt="" />
          </div>
        </div>

        <div cla="container2game">
          {" "}
          <h3>Plateforme : </h3>
          {game.platforms.map((plateforme, index) => {
            return (
              <div key={plateforme.platform.id} className="plateform">
                <div>
                  <p>{plateforme.platform.name}</p>
                </div>
              </div>
            );
          })}
          <h3>Genre(s)</h3>
          {game.genres.map((genre, index) => {
            return (
              <div key={genre.id}>
                <p>{genre.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <h3>Description</h3>
      <p> {parse(game.description)}</p>
      {token ? (
        <>
          <StarsRatting data={data} />
          <Link to={`/games/${game.slug}/create-review`}>
            <button>Write a review</button>
          </Link>
        </>
      ) : (
        <>
          <Link to="/signup">
            <button>Write a review</button>
          </Link>
        </>
      )}
      <div>
        <h3>Suggested Games</h3>
        {sugestGame.results.map((suggested, index) => {
          return (
            <>
              <div key={suggested.id}>
                <img src={suggested.background_image} alt="" />
                <p>{suggested.name}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default OneGame;
