import { useState } from "react";

export default function (props) {
  const [players, setPlayers] = useState(localStorage.getItem("inGamePlayers"));
  const [playerTurnIndex, setPlayerTurnIndex] = useState(0);

  function switchTurn() {
    if (playerTurnIndex < players.length) {
      setPlayerTurnIndex((prev) => prev + 1);
    } else {
      setPlayerTurnIndex(0);
    }
  }

  return (
    <>
      {players.map((player, index) => (
        <PlayerBlock
          player={player}
          setPlayers
          onClick={() => switchTurn}
          disabled={index !== playerTurnIndex}
        />
      ))}
      <h1>You've entered enter game page</h1>;
      <button onClick={props.changePage}>End game</button>
    </>
  );
}
