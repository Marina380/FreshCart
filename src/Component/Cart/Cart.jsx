import React, { useContext, useEffect ,useState  } from "react";
import style from "./Cart.module.css";
import { CartContext } from "../../Context/CartContext";
import logo from "./../../assets/finalProject assets/images/empty_cart-512.jpg";
import { Link } from "react-router-dom";

export default function Cart() {


  let {
    addProduct,
    setAddProduct,
    gettLoggedCart,
    updateLoggedCart,
    deleteLoggedCart,
  } = useContext(CartContext);

 

  return (
    <>
      {addProduct?.products ? (
        <>
          {addProduct?.products?.length == 0 ? (
            <div className="sm:w-[30%] sm:mx-auto lsm:ms-10 py-10">
              <h2 className="text-center text-3xl text-main font-semibold py-3">
                Cart empty
              </h2>
              <img src={logo} alt="#" className="sm:w-full" />
            </div>
          ) : (
            <div>
              <h2 className="text-center text-xl text-main font-semibold py-3">
                Total Price :
                <span className="text-slate-600 text-lg font-medium">
                  EGP {addProduct?.totalCartPrice}
                </span>
              </h2>
            </div>
          )}

          {addProduct?.products?.map((cart, index) => (
            <>
              <div>
                <div
                  className="sm:flex items-center w-[80%] mx-auto py-6 px-5 bg-gray-100"
                  key={index}
                >
                  <div className="w-3/12 bg-slate-700 ">
                    <img
                      src={cart?.product?.imageCover}
                      className="  sm:w-full lsm:w-[500%] max-w-fit object-cover"
                      alt={cart?.product?.title}
                    />
                  </div>
                  <div className="sm:w-9/12    sm:flex justify-between items-center sm:px-5 lsm:py-6 sm:py-3  rounded-md lsm:w-[250px]">
                    <div className=" md:text-center py-2 ">
                      <h3 className="px-2 py-2 font-semibold text-gray-900  lg:text-xl  lsm:text-sm">
                        {cart?.product?.title}
                      </h3>
                      <span className="px-2 py-2 font-semibold text-main  lg:text-lg lsm:text-sm">
                        Price :
                        <span className="text-black font-extralight">
                          EGP {cart?.price}
                        </span>
                      </span>
                      <div
                        onClick={() => deleteLoggedCart(cart.product.id)}
                        href="#"
                        className="font-extralight py-2   text-black ms-2 md:text-lg lsm:text-sm hover:text-xl hover:font-medium duration-75 hover:text-red-600 cursor-pointer"
                      >
                        <span className="me-3 text-xl text-main">
                          <i className="fa-solid fa-trash" />
                        </span>
                        Remove
                      </div>
                    </div>
                    <div>
                      <div className="flex flex-col sm:flex-row items-center justify-center pt-2">
                        <button
                          disabled={cart.count < 0}
                          onClick={() =>
                            updateLoggedCart(cart.product.id, cart.count - 1)
                          }
                          className="inline-flex  items-center justify-center h-5 w-5 sm:h-6 sm:w-6 p-1 ms-2 text-xs sm:text-sm text-gray-500 bg-white border border-green-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-main  "
                          type="button"
                        >
                          <span className="sr-only">Quantity button</span>
                          <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 2"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M1 1h16"
                            />
                          </svg>
                        </button>
                        <div className="">
                          <span className="mx-4 my-3 ps-2">{cart?.count}</span>
                        </div>
                        <button
                          onClick={() =>
                            updateLoggedCart(cart.product.id, cart.count + 1)
                          }
                          className="inline-flex  items-center justify-center h-5 w-5 sm:h-6 sm:w-6 p-1 ms-2 text-xs sm:text-sm text-gray-500 bg-white border border-green-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-main "
                          type="button"
                        >
                          <span className="sr-only">Quantity button</span>
                          <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 1v16M1 9h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className="border-b-2 border-gray-300 border-solid sm:w-[80%] lsm:w-[90%] mx-auto"></h2>
              </div>
            </>
          ))}
                { addProduct?.products?.length == 0  && addProduct ?.products ? null:
          <div className="lg:flex justify-between md:w-[20%] lg:w-[30%] sm:w-[10%] lsm:mx-auto my-7 lsm:w-[70%]">
          <Link className="" to={'/allorders'}>
        <button className="bg-main rounded-lg text-white font-semibold hover:bg-slate-300 hover:text-black hover:scale-110 duration-75 my-2 py-2 px-6 ">
              AllOrder
            </button>
        </Link>
        <Link className="" to={'/checkout'}>
        <button className="bg-main rounded-lg text-white font-semibold hover:bg-slate-300 hover:text-black hover:scale-110 duration-75 my-2 py-2 px-6 ">
              CheckOut
            </button>
        </Link>
          </div>}
        </>
        
      ) : (
        <div className="preloader my-6"></div>
      )}
        <>

        </>
      
      
    
    </>
  );
}
