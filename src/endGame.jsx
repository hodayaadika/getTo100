import PlayerBlock from "../components/PlayerBlock";

export default function (props) {
  const players = props.players;
  return (
    <>
      {players.map((player, index) => (
        <PlayerBlock player={player} setPlayers onClick={() => removePlayer} />
      ))}
      <h1>You've entered end game page</h1>
      <button onClick={props.changePage}>Back to enter Players page</button>
    </>
  );
}

function removePlayer() {
  return alert("Here we need to remove this player");
}
