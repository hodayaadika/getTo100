import { useState } from 'react'

function EnterPlayers()
{
    const login=()=>{
        const savedUsers = JSON.parse(localStorage.User);
        let name = ;

        const newUser = savedUsers.find((user)=>user.name === name);

        if (!newUser) {// log in
            let wrongPassParagraph = document.createElement("p");
            wrongPassParagraph.innerText = "wrong password";
            const existingUsersDiv = document.getElementById("existing-users");
            existingUsersDiv.appendChild(wrongPassParagraph);
        
        }
        else{//sign up
            localStorage.setItem("currentUser",JSON.stringify(newUser));//TODO
            // displayContacts();
            // app.nav(event)
        }
        setCurrentPage('gamePage');
    }
    return(
        <>
        <input type='text'/>
        <button onClick={login}>add user</button>
        </>
    )
}