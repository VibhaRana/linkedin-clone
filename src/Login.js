import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Login.css";
import { auth } from "./firebase";
import { login } from "../src/features/userSlice.js";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const loginToApp = () => {};

  const register = () => {
    if (!name) {
      return alert("Please enter a full name");
    }
    auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
      //go into the user and update the profile
      userAuth.user
        .updateProfile({
          displayName: name,
          photoUrl: profilePic,
        })
        // After doing above, i am gonna dispatch user into the data layer
        .then(() => {
          dispatch(login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
              photoUrl: profilePic
          }));
        });
    })
    .catch((error => alert(error.message)))
  };

  return (
    <div className="login">
      <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0VKs" />
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name (required if registering)"
          type="text"
        />
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Profile pic URL (oprional)"
          type="text"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          type="password"
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}
