import "./App.css"



import {NavLink} from "react-router-dom";




export default function Navbar (){
    return(
       
       <nav className="navbar2" >
        <div className='btn-group2'  >
            <NavLink  to="/"><button className='firstNav ' > Recipe </button></NavLink>
            <NavLink   to="/resturant"><button className='firstNav ' >Resturant</button></NavLink>
            <NavLink to="/splineapp"><button className='firstNav ' >Spline App</button></NavLink>
            <NavLink to="/services"><button className='firstNav ' >upcoming</button></NavLink>

            <NavLink to="/Error"><button className='firstNav ' > umcoming </button></NavLink>
            
        </div>
        <hr/>
       </nav>
    )
}