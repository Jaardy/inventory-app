import React, { useState } from "react";
import apiURL from "../api";

export const LoginPage = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [user, setUser] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if ("" === username) {
        setUsernameError("Please enter your username");
        return;
      }
      if ("" === password) {
        setUsernameError("Please enter your password");
        return;
      }
      const res = await fetch(`${apiURL}/users/${username}`);
      const currentUser = await res.json();
      //currentUser will be null if there is no user with that username
      if (currentUser) {
        //if password is correct (need to make this private in Model)
        if (currentUser.password == password) {
          setUser(currentUser);
          console.log(user);
        } else {
          setPasswordError("Incorrect Password");
        }
      } else {
        setUsernameError("Invalid username");
      }
    } catch (error) {
      console.log("error");
    }
  }

  return (
    <>
      <h2>Login</h2>
      <br />
      <form className="form" onSubmit={handleSubmit}>
        <div className="inputContainer">
          <input
            value={username}
            placeholder="Enter username"
            onChange={(e) => {
              setUsername(e.target.value);
              console.log(username);
            }}
          ></input>
          <p className="errorLabel">{usernameError}</p>
        </div>

        <div className="inputContainer">
          <input
            value={password}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          ></input>
          <p className="errorLabel">{passwordError}</p>
        </div>

        <div className="inputContainer">
          <button className="inputButton" type="submit">
            Log In
          </button>
        </div>
      </form>
    </>
  );
};
