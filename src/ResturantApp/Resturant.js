import React, { useState } from 'react'
import "./style.css"
import menu from "./menuApi"
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueList= [...new Set( menu.map((curElement)=>{
  return curElement.category;
})
),"All"]
export default function Resturant() {
  const [menuData,setMenuData] = useState(menu);
  const [menuList] = useState(uniqueList);

  const filterItem=(category)=>{
    if(category==="All"){
      setMenuData(menu)
      return;
    }
    const updatedList=menu.filter((curElement)=>{
      return curElement.category===category;
    })
    setMenuData(updatedList);
  }

  return (
   <>
  <Navbar filterItem={filterItem}  menuList={menuList}/>
   <MenuCard menuData={menuData} />
   </>
  )
}
