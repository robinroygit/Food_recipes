import React, {useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useFirebase } from "../firebase";
import style from "../styles/LoginForm.module.css"




export default function LoginForm() {


    const [ email,setEmail]=useState("");
    const [ password,setPassword]=useState("");


    const [error, setError]=useState();
    const [loading, setLoading ] = useState();

    const firebase=useFirebase();
    const  history = useNavigate();


    async function handleSubmit(e){
        e.preventDefault();
        //do validation
     
        try{
                setError("");
                setLoading(true);
                await firebase.login(email,password);
                history("/")
                

        }catch(err){
            console.log(err);
            setLoading(false);
            setError("Failed To Login");
        }

    }



  return (
    <div >

<form style={{height:"330px"}} onSubmit={handleSubmit}  className={style.container}>
<h1>Login Page</h1>
      <h2>enter email and password </h2>
    <input
      type="text"
      placeholder="Enter email"
      icon="alternate_email"
      required
            value={email} onChange={(e)=>setEmail(e.target.value)}
    />

    <input type="password" placeholder="Enter password" icon="lock" 
        required
            value={password} onChange={(e)=>setPassword(e.target.value)}
    />
    <br/>
    <button disabled={loading} type="submit" >
      <span>Submit Now</span>
    </button>
    {error && <p className='error'>{error}</p>}

        <br/>
        <br/>
    <div className="info">
      Don't have an account? <Link to="/signup">Signup</Link> instead.
    </div>
  </form>
    </div>
 
  )
}
