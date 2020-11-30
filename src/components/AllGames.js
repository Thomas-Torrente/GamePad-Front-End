import React from "react";
import { Link } from "react-router-dom";

const AllGames = ({ data, setData }) => {
  return (
    <>
      <div className="container-cards">
        {data.results.map((games, index) => {
          return (
            <>
              <div key={games.id} />
              <Link>
                <div className="one-card">
                  <img src={games.background_image} alt="" />
                  <p>{games.name}</p>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
};

export default AllGames;
