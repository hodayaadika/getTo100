export default function (props) {
  return (
    <>
      <h1>You've entered end game page</h1>
      <button onClick={props.changePage}>Back to enter Players page</button>
    </>
  );
}
