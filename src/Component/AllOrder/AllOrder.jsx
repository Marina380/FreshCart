import React, { useContext, useEffect } from "react";
 import { OrderContext } from "../../Context/OrderContext";
import logo from "./../../assets/finalProject assets/images/order.jpg";
export default function AllOrder() {
  let { getallorder, addorder } = useContext(OrderContext);

  
  console.log(addorder);
 
      

  useEffect(()=>{getallorder() },
[getallorder])

  return (
    <>

       <h2 className="bg-red-800 py-56">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sint dignissimos deleniti! Nam voluptatem quia, velit nihil blanditiis qui nobis, tempora cumque tenetur recusandae sed accusamus dolorum eius dolore pariatur non, nesciunt dolorem quod. Earum dolorem odio maiores corporis voluptatibus.</h2>
      {addorder ? (
        <>
          {addorder?.length == 0 ? (
            <div className="md:w-[40%] sm:w-[70%] lsm:w-[100%] sm:mx-auto sm:mt-8 lsm:ms-12 py-10 lsm:mt-36">
              <img src={logo} alt="#" className="sm:w-full object-cover" />
            </div>
          ) : (
            ""
          )}
          {addorder ? (
            <>
            {addorder?.length > 0 ? <>
              <h2 className="text-center text-3xl text-black font-semibold py-8">
                Your Orders
              </h2>
            </>:''}
           
              {addorder?.map((order, index) => (
                <>
                  <div>
                    <div className=" flex items-center sm:justify-around   sm:w-[80%] mx-auto py-6 px-5 bg-gray-100">
                      <div className="  ">
                        {order?.cartItems.map((img) => (
                          <>
                            <div className="w-[100px] flex">
                              <img
                                src={img?.product?.imageCover}
                                className="  w-full max-w-fit object-cover"
                                alt=""
                              />
                            </div>
                          </>
                        ))}

                        <h2>{order?.cartItems?.product}</h2>
                      </div>
                      <div className=" sm:px-5 lsm:py-6 sm:py-3  rounded-md">
                        <div className="  py-2 ">
                          <span className="px-2 py-2 font-bold text-main  lg:text-xl lsm:text-sm">
                            order{" "}
                            <span className="text-black font-bold mx-3">
                              {index + 1}
                            </span>
                          </span>
                        </div>
                        <div className="  py-2 ">
                          {/* <h3 className="px-2 py-2 font-semibold text-gray-900  lg:text-xl  lsm:text-sm">
                    Payment method
                  </h3> */}
                          <span className="px-2 py-2 font-normal text-main  lg:text-lg lsm:text-sm">
                            Total price:
                            <span className="text-black font-normal">
                              {" "}
                              EGP {order?.totalOrderPrice}
                            </span>
                          </span>
                        </div>
                        <div className="  py-2 ">
                          {/* <h3 className="px-2 py-2 font-semibold text-gray-900  lg:text-xl  lsm:text-sm">
                    Payment method
                  </h3> */}
                          <span className="px-2 py-2 font-normal text-main  lg:text-lg lsm:text-sm">
                            Payment method :
                            <span className="text-black font-normal">
                              {" "}
                              {order?.paymentMethodType}
                            </span>
                          </span>
                        </div>
                        <div className="  py-2 ">
                          {/* <h3 className="px-2 py-2 font-semibold text-gray-900  lg:text-xl  lsm:text-sm">
                    Payment method
                  </h3> */}
                          <span className="px-2 py-2 font-normal text-main  lg:text-lg lsm:text-sm">
                            city :{" "}
                            <span className="text-black font-normal">
                              {" "}
                              {order?.shippingAddress?.city}
                            </span>
                          </span>
                        </div>
                        <div className="  py-2 ">
                          {/* <h3 className="px-2 py-2 font-semibold text-gray-900  lg:text-xl  lsm:text-sm">
                    Payment method
                  </h3> */}
                          <span className="px-2 py-2 font-normal text-main  lg:text-lg lsm:text-sm">
                            phone :
                            <span className="text-black font-normal">
                              {" "}
                              {order?.shippingAddress?.phone}
                            </span>
                          </span>
                        </div>
                        <div className="  py-2 ">
                          {/* <h3 className="px-2 py-2 font-semibold text-gray-900  lg:text-xl  lsm:text-sm">
                    Payment method
                  </h3> */}
                          <span className="px-2 py-2 font-normal text-main  lg:text-lg lsm:text-sm">
                            details :
                            <span className="text-black font-normal">
                              {" "}
                              {order?.shippingAddress?.details}
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <h2 className="border-b-2 border-gray-300 border-solid sm:w-[80%] lsm:w-[90%] mx-auto"></h2>
                  </div>
                </>
              ))}
            </>
          ) : (
            ""
          )}
        </>
      ) : (
        <div className="preloader my-6"></div>
      )}
    </>
  );
}
