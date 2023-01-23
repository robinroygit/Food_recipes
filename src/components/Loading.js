import React from 'react'
import style from "../styles/Loading.module.css";

export default function Loading() {
  return (
    <div>
    <h1>Loading....</h1>
    <div className='loading'></div>
    <div className= {style.ldsroller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}
