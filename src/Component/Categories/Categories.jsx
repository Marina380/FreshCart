import React from "react";
import style from "./Categories.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Categories() {
  const [categories, setCategories] = useState(null);
  // const [error, setError] = useState(null);

  async function getCategories() {
    try {
      let { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/categories`
      );

      setCategories(data.data);

    } catch (err) {
      // setError(err.response.data.message);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      {categories ? (
        <>
          {categories ? (
            <div className=" text-start m-auto w-5/6 text-3xl font-semibold py-5 mb-3 text-slate-500 capitalize">
              All Categories
            </div>
          ) : (
            ""
          )}
          <div className="flex flex-wrap lsm:w-full lsm:ms-9 md:ms-20 md:w-11/12 md:m-auto  gap-x-8  gap-y-14 ">
            {categories ?.map((categoriesone, index) => (
              <>
                <div
                  key={index}
                  className=" w-[24%] bg-[whitesmoke]  hover:scale-110 duration-100 home lsm:w-full md:w-[20%]  ms-7 px-3 shadow-lg shadow-gray-400 rounded-2xl py-6 "
                >
                  <Link to={`/categoriesDetails/${categoriesone ?._id}`}>
                    <img
                      src={categoriesone ?.image}
                      alt="#"
                      className="w-full object-cover h-[300px]"
                    />
                    <h3 className="font-semibold text-center transition-all duration-500 text-slate-600 hover:text-main px-1 py-1 pt-2 text-xl mt-7">
                      {categoriesone ?.name}
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
