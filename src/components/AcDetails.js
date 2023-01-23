import React from "react";
import { useState } from "react";
import style from "../styles/AcDetails.module.css";

export default function AcDetails() {
  const [txt, setTxt] = useState("");
  const btn=document.getElementById("btn")

  const copytoclip = () => {
    navigator.clipboard
      .writeText(txt)
      .then((value) => {
         btn.innerHTML= "done";
        setTimeout(() => {
          btn.innerHTML = "click";
        }, 1000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={style.parent}>
      <h1 className={style.child}>Account Details</h1>
      <input type="text" value={txt} onChange={(e) => setTxt(e.target.value)} />
      <button onClick={copytoclip} id="btn">
        {"cliic"}
      </button>

      {/* <h2 className={style.child}>All your account details will be available very soon</h2> */}
    </div>
  );
}
