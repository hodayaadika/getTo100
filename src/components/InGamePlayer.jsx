export default function InGamePlayers(props) {
  // const mapPlayers=(players)=>{
  //   return players.name;
  // }
  console.log("hi",props);
  return (
    <>
      <h1>players</h1>
      <ul>
    {console.log('arrPlayers:000 ', props.arrPlayers)}
    {props.arrPlayers !== null && props.arrPlayers.map((player) => (
          <li key={player.name}>{player.name}</li>
        ))} 
      </ul>
      
    </>
  );
}
