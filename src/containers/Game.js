import React, { useState, useEffect } from "react";
import axios from "axios";
import OneGame from "../components/OneGame";
import { useParams } from "react-router-dom";

const Game = ({ token, setUser }) => {
  const [sugestGame, setSugestGame] = useState({});
  const [game, setGame] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchDataGame = async () => {
      const responseGame = await axios.get(
        `https://api.rawg.io/api/games/${id}`
      );
      setGame(responseGame.data);
      console.log(responseGame.data);
      setIsLoading(false);
    };

    fetchDataGame();
  }, [id]);

  // ----------------------------------------------------------------------------------

  useEffect(() => {
    const fetchGameSugest = async () => {
      const responseSugestGame = await axios.get(
        `https://api.rawg.io/api/games/${id}/suggested`
      );
      setSugestGame(responseSugestGame.data);
      console.log("---->", responseSugestGame.data);
    };

    fetchGameSugest();
  }, [id]);

  return isLoading ? (
    <>
      <div className="isLoading"></div>
    </>
  ) : (
    <>
      <div>
        <OneGame
          sugestGame={sugestGame}
          setSugestGame={setSugestGame}
          game={game}
          setGame={setGame}
          token={token}
          setUser={setUser}
        />
      </div>
    </>
  );
};

export default Game;

//https://api.rawg.io/api / games / {id}
