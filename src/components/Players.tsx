import React from "react";
import { useNavigate } from "react-router-dom";
import { PlayersProps } from "../../customTypes/customTypes";
import "../styling/players.css";

function Players({
  players,
  setPlayers,
  setWinningScore,
  winningScore,
}: PlayersProps) {
  const [name, setName] = React.useState("");
  const [startButtonDisabled, setStartButtonDisabled] = React.useState(false);
  const navigate = useNavigate();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const addPlayer = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (players.length === 10) {
      return alert("Max 10 players");
    } else {
      if (name.length > 0) {
        setPlayers([...players, { name: name, scores: [] }]);
        setName("");
      }
    }
  };

  const handleRemovePlayer = (e: React.MouseEvent<HTMLButtonElement>) => {
    const targetName = (e.target as HTMLButtonElement).value;

    setPlayers(
      players.filter((player) => {
        return player.name !== targetName;
      })
    );
  };

  const handleSetWinningScore = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWinningScore(+e.target.value);
  };

  const handleStartGame = () => {
    navigate("/play");
  };

  const handleReset = () => {
    setPlayers([]);
    navigate("/");
  };

  React.useEffect(() => {
    players.length < 1
      ? setStartButtonDisabled(true)
      : setStartButtonDisabled(false);
  }, [players]);
  return (
    <>
      <h2>Add some players...</h2>
      <ul>
        {players.map((player) => {
          return (
            <div key={player.name}>
              <li>
                {player.name}{" "}
                <button
                  className="removePlayerButton"
                  value={player.name}
                  onClick={handleRemovePlayer}
                >
                  ❌
                </button>
              </li>
            </div>
          );
        })}
      </ul>
      <form>
        <input type="text" value={name} onChange={handleNameChange} />
        <button onClick={addPlayer}>Add</button>
        <h2>Set winning score...</h2>
        <input
          type="text"
          value={winningScore}
          onChange={handleSetWinningScore}
        ></input>
      </form>
      <div className="bottomButtons">
        <button
          className="bottomButton"
          disabled={startButtonDisabled}
          onClick={handleStartGame}
        >
          Start Game!
        </button>
        <button className="bottomButton" onClick={handleReset}>
          Reset
        </button>
      </div>
    </>
  );
}

export default Players;
