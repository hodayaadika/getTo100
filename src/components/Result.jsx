import { useState } from "react";
export default function Result(props) {
  const [users, setUsers] = useState(props);
  // const uArr = JSON.parse(localStorage["Users"]);
  const arr = [];
  let min = users[0];
  for (let i in users) {
    if (users[i] < min) {
      arr.push(users[i]);
      setUsers(users.slise(i, users.length)[0]);
    }
  }
  // function findMaxWins() {
  //     let max = -1;
  //     let maxIdx = -1;
  //     let i = 0;
  //     for (; i < uArr.length; i++) {
  //         if (uArr[i]. > max) {
  //             max = uArr[i].wins;
  //             maxIdx = i;
  //         }
  //     }
  //     return uArr.splice(maxIdx, 1)[0];
  // }
  return (
    <>
      <h1>result</h1>
      <ul>{arr.map(props.name)}</ul>;
    </>
  );
}
