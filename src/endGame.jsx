export default function (props) {
  return (
    <>
      <h1>hurray</h1>
      <h1>You've Finished the game !!!</h1>
      <h1>...</h1>
      <p>Now what are you going to do with your life?</p>
      <p>BTW, we have a food fairy</p>
      <button onClick={props.changePage}>Back to enter Players page</button>
    </>
  );
}
