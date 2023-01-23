import React, { useState } from "react";
import { useFirebase } from "../firebase";

import style from "../styles/SignUpForm.module.css"


export default function Signup() {
  const firebase = useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
 <div >


     
     <div className={style.container}>



     <h1>Sign up Page</h1>
      <h2>enter email and password </h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      /><br/>
      <button
        type="button"
        onClick={() => {
          firebase.signinwithempw(email, password);
          firebase.putData("users/" + password, { email, password });
        }}
      >
        submit
      </button>
        <br/>
        <br/>
      <button onClick={firebase.signinwithgoogle}>sign in with google</button>


    </div>

 </div>
  );
}
