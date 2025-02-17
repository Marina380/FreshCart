import React from "react";
import style from "./Footer.module.css";
import logo from "./../../assets/finalProject assets/images/logoo.png";
import logoapp from "./../../assets/finalProject assets/images/applogo.png";

export default function Footer() {
  return (
    <>
      <body className="relative">
        <footer
          className="bg-gray-200 absolute top-[100vh]
 
 
 left-0 right-0"
        >
          <div className="mx-auto w-full max-w-screen-xl p-4  lg:pt-8 font-sans">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0 lsm:text-center md:text-left">
                <h2 className="text-xl text-gray-700">Get the FreshCart app</h2>
                <p className="text-md text-slate-400  mt-1">
                  We will send you a link, open it on your phone to download the
                  app
                </p>
              </div>
            </div>

            <div className=" mt-4 flex justify-around">
              <input
                type="text"
                name="street-address"
                id="street-address"
                placeholder="Email .."
                autoComplete="street-address"
                className="block md:w-9/12 rounded-md border lsm:me-2 m-0 lsm:w-full border-gray-300 bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-main sm:text-sm/6"
              />

              <button
                type="submit"
                className="capitalize bg-main rounded-md px-6 py-1 lsm:w-6/12  lg:w-48 text-white text-md font-light "
              >
                share app link
              </button>
            </div>

            <hr className="my-6 border-gray-300 sm:mx-auto lg:my-8" />

            <div className="sm:flex sm:items-center sm:justify-between">
              <div className="text-sm text-gray-500 sm:text-center flex justify-between space-x-4  items-center">
                <h5 className="capitalize text-base text-gray-700">
                  payment partners
                </h5>
                <div
                  className="w-36
                 "
                >
                  <img src={logo} alt="#" className="w-full rounded-md" />
                </div>
              </div>

              <div className="text-sm text-gray-500 sm:text-center flex justify-between space-x-4   items-center">
                <h5 className="capitalize text-base  text-gray-700">
                  Get deliveries with FreshCart
                </h5>
                <div
                  className="w-36 mt-2
                 "
                >
                  <img src={logoapp} alt="#" className="w-full rounded-md" />
                </div>
              </div>
            </div>

            <hr className="my-6 border-gray-300 sm:mx-auto lg:my-8" />
          </div>
        </footer>
      </body>
    </>
  );
}
