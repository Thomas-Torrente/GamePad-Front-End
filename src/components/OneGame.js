import React from "react";
import parse from "html-react-parser";

const OneGame = ({ data, setData }) => {
  return (
    <>
      <h1 className="title-center">{data.name_original}</h1>
      <div className="oneGame">
        <div className="container1game">
          {" "}
          <div className="img-oneGame">
            <img src={data.background_image} alt="" />
          </div>
        </div>

        <div cla="container2game">
          {" "}
          <h3>Plateforme : </h3>
          {data.platforms.map((plateforme, index) => {
            return (
              <div className="plateform">
                <div key={plateforme.platform.id}>
                  <p>{plateforme.platform.name}</p>
                </div>
              </div>
            );
          })}
          <h3>Genre(s)</h3>
          {data.genres.map((genre, index) => {
            return (
              <div key={genre.id}>
                <p>{genre.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <h3>Description</h3>
      <p> {parse(data.description)}</p>
    </>
  );
};

export default OneGame;
