import { useState } from "react";
import PlayerBlock from "../components/PlayerBlock";

export default function (props) {
  //   const [players, setPlayers] = useState(localStorage.getItem("inGamePlayers"));
  const [players, setPlayers] = useState([
    { name: "jack", currNumber: 35, steps: 0 },
    { name: "Daniel", currNumber: 70, steps: 0 },
    { name: "Hodaya", currNumber: 10, steps: 0 },
  ]);

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
      {console.log(players)}
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
