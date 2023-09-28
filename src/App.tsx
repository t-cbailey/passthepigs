import React from "react";
import Home from "./components/Home";
import Players from "./components/Players";
import Play from "./components/Play";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Player } from "../customTypes/customTypes";
import { Navigate } from "react-router-dom";

function App() {
  const initialPlayers: Player[] = JSON.parse(
    localStorage.getItem("players") || "[]"
  );
  const initialWinningScore: number =
    Number(localStorage.getItem("winningScore")) || 100;

  const [players, setPlayers] = React.useState<Player[]>(initialPlayers);
  const [winningScore, setWinningScore] =
    React.useState<number>(initialWinningScore);

  React.useEffect(() => {
    localStorage.setItem("players", JSON.stringify(players));
  }, [players]);

  React.useEffect(() => {
    localStorage.setItem("winningScore", winningScore.toString());
  }, [winningScore]);
  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/players"
          element={
            <Players
              players={players}
              setPlayers={setPlayers}
              setWinningScore={setWinningScore}
              winningScore={winningScore}
            />
          }
        />
        <Route
          path="/play"
          element={
            <Play
              players={players}
              setPlayers={setPlayers}
              winningScore={winningScore}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
