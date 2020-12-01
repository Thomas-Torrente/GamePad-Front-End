import React, { useState, useEffect } from "react";
import axios from "axios";

import AllGames from "../components/AllGames";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState();

  const fetchData = async () => {
    const response = await axios.get(
      `https://api.rawg.io/api/games?search=${search}?page=${page}`
    );

    console.log(response.data);

    setData(response.data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <>
      <div className="isLoading"></div>
    </>
  ) : (
    <>
      <div className="all-pages-games">
        <div className="banniere-games">
          <div className="search-input">
            <input
              type="text"
              placeholder="Rechercher des jeux"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </div>
          <img
            src="https://icn.lycee-valin.fr/projets2018/seconde3/eleve18/banni%C3%A8re.png"
            alt=""
          />
        </div>
        <div>
          <AllGames data={data} setData={setData} />
        </div>
        <div className="pagination">
          <button
            onClick={(event) => {
              setPage(event.target.value);
            }}
          >
            Page suivante{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
