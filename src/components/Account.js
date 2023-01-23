import classes from "../styles/Account.module.css";
// import { Link } from "react-router-dom";
// import { useAuth } from "../context/context";
import { useFirebase } from "../firebase";
import { Link } from "react-router-dom";

export default function Account() {
  const { currentUser, logout } = useFirebase();

  return (
    <div className={classes.account}>
    
      {currentUser ? (
        <>
        <Link to="/acdetails">
        <span className="material-icons-outlined" style={{ color:"black"}} title="Account">
            account_circle
          </span>
        </Link>
        
          <span>{currentUser.displayName}</span>
          <span
            className="material-icons-outlined"
            title="Logout"
            onClick={logout}
          >
            {" "}
            logout{" "}
          </span>
        </>
      ) : (
        <div>
          <Link to="/signup">
            <h4 className={classes.signinlogin}>Signup</h4>
          </Link>

          <Link to="/login">
            <h4 className={classes.signinlogin}>Login</h4>
          </Link>

        </div>
      )}
    </div>
  );
}
