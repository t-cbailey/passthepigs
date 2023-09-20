import { PlayProps } from "../../customTypes/customTypes";
import "../styling/play.css";
import CurrentTurn from "./CurrentTurn";

function Play({ players, setPlayers, winningScore }: PlayProps) {
  return (
    <>
      <div id="totalsContainer">
        <h2>Total Scores</h2>
        {players.map((player) => {
          let total = 0;
          if (player.scores.length < 1) {
            total = 0;
          } else {
            total = player.scores.reduce((a, b) => {
              return a + b;
            });
          }

          return (
            <p key={player.name}>
              {player.name}'s score : {total}
            </p>
          );
        })}
      </div>
      <CurrentTurn
        players={players}
        setPlayers={setPlayers}
        winningScore={winningScore}
      />
    </>
  );
}

export default Play;
