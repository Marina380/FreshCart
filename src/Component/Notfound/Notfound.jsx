import React from "react";
import style from "./Notfound.module.css";
import error from "./../../assets/finalProject assets/images/404.png";

export default function Notfound() {
  return (
    <div className="md:w-9/12 md:mx-auto lsm:w-full lsm:ms-8 lsm:mt-40
    ">
      <img src={error} alt="page not found" className="w-full" />
      <h4 className="uppercase text-center text-3xl font-bold text-main mt-4">
        oops! page not found.
      </h4>
    </div>
  );
}
