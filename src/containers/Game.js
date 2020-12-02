import React, { useState, useEffect } from "react";
import axios from "axios";
import OneGame from "../components/OneGame";
import { useParams } from "react-router-dom";

const Game = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://api.rawg.io/api/games/${id}`);
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, [id]);

  return isLoading ? (
    <>
      <div className="isLoading"></div>
    </>
  ) : (
    <>
      <div>
        <OneGame data={data} setData={setData} />
      </div>
    </>
  );
};

export default Game;

//https://api.rawg.io/api / games / {id}
