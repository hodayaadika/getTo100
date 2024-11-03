import { useState } from "react";

export default function EnterPlayers(props) {
  if (localStorage.getItem("Users") === null) {
    let userArray = [];

    userArray.push({
      name: "guest",
      numGame:0,
      avgStep:undefined

    });
    console.log("hi");
    localStorage.setItem("Users", JSON.stringify(userArray));
  }
  // localStorage.setItem("inGamePlayers",JSON.stringify({name:hodaya}));
  const [inputValue, setInputValue] = useState("");
  const getInputValue = (event) => {
    setInputValue(event.target.value);
  };
  const login = () => {
    const savedUsers = JSON.parse(localStorage.Users); //array local storage
    console.log("savedUsers: ", savedUsers);
    let name = inputValue;
    console.log({ name });
    const newUser = savedUsers.find((user) => user.name === name);

    if (!newUser) {
      localStorage.setItem("Users", JSON.stringify([...savedUsers, { name }]));
    }

  };
  return (
    <>
    <component name={inputValue} />
      <input type="text" onChange={getInputValue} />
      <button onClick={login}>add user</button>
      <p>{inputValue}</p>
      <h1>You've entered enter Players page</h1>
      <button onClick={props.changePage}>Start game</button>
    </>
  );
}

// export default function (props) {
//   return (
//     <>

//     </>
//   );
// }
