import React from "react";
import Home from "./components/Home";
import Players from "./components/Players";
import Play from "./components/Play";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Player } from "../customTypes/customTypes";

function App() {
  const [players, setPlayers] = React.useState<Player[]>([]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/players"
          element={<Players players={players} setPlayers={setPlayers} />}
        />
        <Route
          path="/play"
          element={<Play players={players} setPlayers={setPlayers} />}
        />
      </Routes>
    </>
  );
}

export default App;
