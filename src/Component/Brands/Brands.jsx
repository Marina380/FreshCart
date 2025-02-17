import React from "react";
import style from "./Brands.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Brands() {
  const [brand, setBrand] = useState(null);
  // const [error, setError] = useState(null);

  async function getBrand() {
    try {
      let { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/brands`
      );

      setBrand(data.data);
    } catch (err) {
      // setError(err.response.data.message);
    }
  }

  useEffect(() => {
    getBrand();
  }, []);

  return (
    <>
      {brand ? (
        <>
          {brand ? (
            <div className=" text-start m-auto w-5/6 text-3xl font-semibold py-5 mb-3 text-main capitalize">
              All Brands
            </div>
          ) : (
            ""
          )}
          <div className="flex flex-wrap lsm:w-full lsm:ms-9 md:ms-20 md:w-11/12 md:m-auto  gap-x-8  gap-y-14 ">
            {brand?.map((brandone, index) => (
              <>
                <div
                  key={index}
                  className=" w-[24%] bg-[whitesmoke]  hover:scale-110 duration-100 home lsm:w-full md:w-[20%]  ms-7 px-3 shadow-lg shadow-gray-400 rounded-2xl py-10 "
                >
                  <Link to={`/brandDetails/${brandone._id}`}>
                    <img src={brandone ?.image} alt="#" className="w-full" />
                    <h3 className="font-semibold text-main px-1 py-1 pt-2 text-xl mt-7">
                      {brandone ?.name}
                    </h3>

                  </Link>

               
                </div>
              </>
            ))}
          </div>
         
        </>
      ) : (
        <div className="preloader"></div>
      )}
    </>
  );
}

