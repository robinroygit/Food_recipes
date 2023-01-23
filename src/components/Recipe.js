import React, { useState } from "react";
import style from "../styles/recipe.module.css";

export default function Recipe({ title, calories, image, ingredients}) {
  const [click, setClick] = useState();
  const [tr,setTr] = useState(true);

  const handleclick = (e) => {
    if(tr){
      const a= ingredients.map((item) => (
          <li key={Math.random()}>{`${item.food}`}</li>
          ))
          setClick(a)
          setTr(false)

        }else{
            setClick("")
            setTr(true)

        }

  
  };




  return (

    <div className={style.recipe}>

      <h1>{title}</h1>
      <p>{`Calories: ` + Math.round(calories)}</p>
      <img className={style.image} src={image} alt="" onClick={handleclick} />
      <ol>
      
        {click}
      </ol>


    </div>
  );

}
