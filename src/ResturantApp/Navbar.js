import "./style.css"
import React from 'react'

const Navbar = ({filterItem, menuList}) => {
  return (
    <>
  <hr/>
           <nav className='navbar'>
    <div className='btn-group'>
    {
        menuList.map((curElement)=>{
            return(
    <button key={Math.random()} className='btn-group__item' onClick={()=>filterItem(curElement)}>{curElement}</button>

            )
        })
    }


    {/* <button className='btn-group__item' onClick={()=>setMenuData(menu)}>All</button> */}
    </div>
   </nav>
    </>
  )
}

export default Navbar