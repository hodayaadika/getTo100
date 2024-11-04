import { useState } from "react";
import InGamePlayers from "./InGamePlayer";

export default function EnterPlayers(props) {
  if (localStorage.getItem("Users") === null) {
    let userArray = [];

    userArray.push({
      name: "guest",
      numGame:0,
      avgStep:undefined

    });
    localStorage.setItem("Users", JSON.stringify(userArray));
  }
  const [inputValue, setInputValue] = useState("");
  const getInputValue = (event) => {
    setInputValue(event.target.value);
  };
  let name;
  let arrPlayers = [];
  const login = () => {
    const arrUsers = JSON.parse(localStorage.getItem("Users")); //array local storage user מערך1
    console.log('arrUsers: ', arrUsers);

    // localStorage.getItem("inGamePlayers");
    arrPlayers = JSON.parse(localStorage.getItem("inGamePlayers")); //array local storage players מערך2
    console.log('arrPlayers: ', arrPlayers);

    name = inputValue;
    // console.log({ name });
    const oldUser = arrUsers.find((user) => user.name === name);
    // console.log(oldUser);
    if (!oldUser) {//sign up
      console.log("sign up");
      if(!arrPlayers)
        {
          console.log("player1")
          let userPlayer = [];
    
          userPlayer.push({
            name: name,
            numGame:0,
            avgStep:undefined
      
          });
          localStorage.setItem("inGamePlayers", JSON.stringify(userPlayer));
        }
      else{
        console.log("not first players")
      localStorage.setItem("Users",JSON.stringify([...arrUsers,
          { name: name, numGame: 0, avgStep: undefined }]));
      localStorage.setItem("inGamePlayers", JSON.stringify([...arrPlayers,
        { name: name, numGame: 0, avgStep: undefined }]));
      }
    }
     else {
      console.log("login")
      if(!arrPlayers)
        {
          console.log("player1")
          let userPlayer = [];
    
          userPlayer.push({
            name: name,
            numGame:props.numGame,
            avgStep:props.avgStep
      
          });
          localStorage.setItem("inGamePlayers", JSON.stringify(userPlayer));
        }
      else{
        console.log("not first players");
      console.log("else1");
      localStorage.setItem("inGamePlayers",JSON.stringify([...arrPlayers,
          { name: name, numGame: props.numGame, avgStep: props.avgStep }]));
      }
    }
    
  };
  return (
    <>
    <inGamePlayers arrPlayers={arrPlayers} />
      <input type="text" onChange={getInputValue} />
      <button onClick={login}>add user</button>
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
