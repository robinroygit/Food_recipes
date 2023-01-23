import React from 'react'
import Spline from "@splinetool/react-spline"
import style from "../styles/spline.module.css"
import { useEffect } from 'react'
import { useState } from 'react'
import Loading from './Loading'

export default function SplineApp() {
  const [loading, setLoading]=useState(true);
  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
      console.log(loading)
    }, 2000);

  })
  return (
    <>
    

    <div className={style.head}> 
    <h3>
    this project is done by spline
    </h3> 
    <p>3D opens a new door for creativity. A solid set of features that will help you create your best designs.</p>
    </div>
    {
  loading?<div className={style.h11}><Loading/></div>:<div className={style.spline} ><Spline  scene="https://prod.spline.design/WcR44DHvXNlXbu7O/scene.splinecode" />
 </div>
}

    
    </>
  )
}
