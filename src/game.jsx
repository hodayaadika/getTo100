import { useState } from "react";
import PlayerBlock from "../components/PlayerBlock";
import Result from "./components/Result";

export default function (props) {
  let stringedPlayersList = JSON.stringify([
    { name: "jack", currNumber: 35, steps: 0 },
    { name: "Daniel", currNumber: 70, steps: 0 },
    { name: "Hodaya", currNumber: 10, steps: 0 },
  ]);
  localStorage.setItem("inGamePlayers", stringedPlayersList);

  const [players, setPlayers] = useState(
    JSON.parse(localStorage.getItem("inGamePlayers"))
  );
  const [playerTurnIndex, setPlayerTurnIndex] = useState(0);

  function switchTurn() {
    if (playerTurnIndex < players.length - 1) {
      setPlayerTurnIndex((prev) => prev + 1);
    } else {
      setPlayerTurnIndex(0);
    }
  }

  function removePlayer(index) {
    setPlayers((prev) => prev.toSpliced(index, 1));
  }

  return (
    <>
      <h1>Get To 100 (if you even can)</h1>
      {players.map((player, index) => (
        <PlayerBlock
          player={player}
          setPlayers
          switchTurn={switchTurn}
          isActive={index === playerTurnIndex}
          removePlayer={() => removePlayer(index)}
          key={player.name}
        />
      ))}
      <h1>You've entered enter game page</h1>;
      <button onClick={props.changePage}>End game</button>
      <Result name={stringedPlayersList} />
    </>
  );
}
