import { TurnInfoProps } from "../../customTypes/customTypes";

function TurnInfo({ players, currentPlayer, win, turnScore }: TurnInfoProps) {
  return (
    <>
      <div id="turnInfoContainer">
        {players[currentPlayer] && (
          <h2>{`${players[currentPlayer]?.name} ${
            win ? "Wins!" : "'s turn"
          }`}</h2>
        )}
        <p>
          {typeof turnScore === "number"
            ? `Score this turn : ${turnScore}`
            : /PIG OUT/.test(turnScore)
            ? "PIG OUT!!!"
            : "MAKIN' BACON!!!"}
        </p>
      </div>
    </>
  );
}

export default TurnInfo;
