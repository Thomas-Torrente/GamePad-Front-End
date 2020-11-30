import React from "react";

const OneGame = ({ data, setData }) => {
  return (
    <>
      <h2 className="title-center">{data.name_original}</h2>
      <div className="oneGame">
        <div className="container1game">
          {" "}
          <div className="img-oneGame">
            <img src={data.background_image} alt="" />
          </div>
        </div>

        <div cla="container2game">
          {" "}
          <h3>Plateforme</h3>
          {/* <p> {data.platforms.platform.name}</p> */}
        </div>
      </div>
      <h3>Description</h3>
      <p> {data.description}</p>
    </>
  );
};

export default OneGame;
