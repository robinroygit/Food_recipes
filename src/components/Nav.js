import classes from "../styles/Nav.module.css";
import Account from "./Account";
import { Link } from "react-router-dom";

import logo from "../assets/robin-logo.png";


export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>

        <span className={classes.brand} >
      <Link to="/">
        <img src={logo} alt="Learn with Robin Logo" />
      </Link>


         <Link to="/splineapp">  
         <button className={classes.btn3d}>3D model</button>
         </Link>   
        <h3>Robin's Projects</h3>
        </span>
         

        </li>
      </ul>
      <Account />
    </nav>
  );
}
