import React, { useContext, useEffect } from "react";
import { WishlistContext } from "../../Context/Wishlist";
import { useState } from "react";
import logo from "../../assets/finalProject assets/images/wish.jpg";
import { CartContext } from "../../Context/CartContext";
export default function Wishlist() {
  let { addToCartWishlist, addWishlist, getWishlist, deletewishlistCart } =
    useContext(WishlistContext);
  let { addToCart } = useContext(CartContext);

  return (
    <>
      {addWishlist ? (
        <>
          <h2 className="text-center text-3xl text-main font-semibold py-3 lsm:ms-10 sm:ms-8 lg:ms-3">
            wishlist {addWishlist?.length == 0 ? "empty" : ""}
            <i className="fa-regular fa-heart text-3xl  text-red-600  ms-4"></i>
            <span className="text-slate-600 text-lg font-medium"></span>
          </h2>

          {addWishlist?.length == 0 ? (
            <div className="sm:w-[50%]  ` sm:mx-auto lsm:ms-10 py-14">
              <img src={logo} alt="#" className="sm:w-full object-cover" />
            </div>
          ) : (
            ""
          )}
          {addWishlist?.map((cart, index) => (
            <>
              <div>
                <div
                  className="sm:flex items-center w-[80%] mx-auto py-6 px-12 bg-gray-100"
                  key={index}
                >
                  <div className="w-3/12 bg-slate-700 ">
                    <img
                      src={cart?.imageCover}
                      className="  sm:w-full lsm:w-[500%] max-w-fit object-cover"
                      alt={cart?.title}
                    />
                  </div>
                  <div className="sm:w-9/12    sm:flex justify-between items-center sm:px-5 lsm:py-6 sm:py-3  rounded-md lsm:w-[250px]">
                    <div className=" md:text-center py-2 ">
                      <h3 className="px-2 py-2 font-semibold text-gray-900  lg:text-xl  lsm:text-sm">
                        {cart?.title}
                      </h3>
                      <span className="px-2 py-2 font-semibold text-main  lg:text-lg lsm:text-sm">
                        Price :
                        <span className="text-black font-extralight">
                          EGP {cart?.price}
                        </span>
                      </span>
                      <div
                        onClick={() => deletewishlistCart(cart?.id)}
                        href="#"
                        className="font-extralight py-2   text-black ms-2 md:text-lg lsm:text-sm hover:text-xl hover:font-medium duration-75 hover:text-red-600 cursor-pointer"
                      >
                        <span className="me-3 text-xl text-main">
                          <i className="fa-solid fa-trash" />
                        </span>
                        Remove
                      </div>
                      <button 
                                            onClick={() => addToCart(cart?.id)}

                      className="bg-main  py-2 px-6 rounded-lg text-white font-semibold my-6   ">
                          Add To Cart
                        </button>
                    </div>
                    <div>
                      <div className="flex flex-col sm:flex-row items-center justify-center pt-2">
                      
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className="border-b-2 border-gray-300 border-solid sm:w-[80%] lsm:w-[90%] mx-auto"></h2>
              </div>
            </>
          ))}
        </>
      ) : (
        <div className="preloader my-6"></div>
      )}
    </>
  );
}
