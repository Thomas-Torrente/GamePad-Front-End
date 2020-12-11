import React from "react";
import parse from "html-react-parser";
// parse permet d'enlever et de mettre en forme si dans le text il y a du html en dur
import StarsRatting from "./StarsRating";

import { Link } from "react-router-dom";

const OneGame = ({ game, token, setUser, sugestGame, commentGame }) => {
  // console.log(data);

  return (
    <>
      <div className="title-one-game ">
        <h1 className="title-center">{game.name_original}</h1>
      </div>
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
          {/* ---------------------- */}
          <h3>Developers</h3>
          {game.developers.map((developers, index) => {
            return (
              <div>
                <p>{developers.name}</p>
              </div>
            );
          })}
          {/* ---------------------- */}
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
      <div className="one-game-description">
        <h3>Description</h3>
        <p> {parse(game.description)}</p>
      </div>

      {/* <div>
        <h3>All Comments</h3>

        {commentGame.commentsAll.map((comment, index) => {
          return (
            <div>
              <p>{comment.title}</p>
              <p>{comment.description}</p>
            </div>
          );
        })}
      </div> */}
      {token ? (
        <>
          <div className="avis">
            <div className="stars-ratting">
              <StarsRatting game={game} />
            </div>

            <Link to={`/create-review/${game.slug}`}>
              <button>Write a review</button>
            </Link>
          </div>
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
        <div className="sugest-game">
          {sugestGame.results.map((suggested, index) => {
            return (
              <Link to={`/games/${suggested.id}`}>
                <div key={suggested.id}>
                  <img src={suggested.background_image} alt="" />

                  <p className="title-center">{suggested.name}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default OneGame;
