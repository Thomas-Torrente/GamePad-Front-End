import React, { useState, useEffect } from "react";
import axios from "axios";

import AllGames from "../components/AllGames";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.rawg.io/api/games?page=${page}&search=${search}`
      );

      // console.log(response.data);

      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, [search, page]);
  // console.log(data.results && data.results.length);
  return isLoading ? (
    <>
      <div className="isLoading"></div>
    </>
  ) : (
    <>
      <div className="search-input">
        <input
          className="search"
          type="text"
          placeholder="Rechercher des jeux"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
            setPage(1);
            //  a chaque fois qu'on rechercher quelques chose de différent on remet la page a 1
          }}
        />
      </div>

      <div className="all-pages-games">
        <div className="banniere-games">
          <img
            src="https://icn.lycee-valin.fr/projets2018/seconde3/eleve18/banni%C3%A8re.png"
            alt=""
          />
        </div>

        <div>
          <AllGames data={data} setData={setData} />
        </div>
        <div className="pagination">
          {data.previous && (
            // si il y a la possibilité d'aller a la page suivante prck ya plus de résultat que ceux afficher alors voir ci dessous // sinon on affiche rien
            <button
              className="button-previus"
              onClick={() => {
                setPage(page - 1);
                //  on ajouter a la page - 1
              }}
            >
              Page précédante{" "}
            </button>
          )}
          {data.next && (
            // si il y a la possibilité d'aller a la page suivante prck ya plus de résultat que ceux afficher alors voir ci dessous // sinon on affiche rien
            <button
              className="button-next"
              onClick={() => {
                setPage(page + 1);
                //  on ajouter a la page + 1
              }}
            >
              Page suivante{" "}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
