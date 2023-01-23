import React, {  useState } from 'react'
import { useFirebase } from "./firebase"

export default function Signup() {
    const firebase = useFirebase();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");


  return (
    <div>
        <h1>enter email and password</h1>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} /><br/>
        <input type="password" value={password}  onChange={(e)=>setPassword(e.target.value)} />
        <button type='button' onClick={()=>{firebase.signinwithempw(email,password);
                                            firebase.putData("users/" + password,{email,password});
                                            }
        }>submit</button>

        <button  onClick={firebase.signinwithgoogle}>sign in with google</button>
    </div>
  )
}
