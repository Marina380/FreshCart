import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function CategoriesDetails() {
  let { id } = useParams();
  const [categoriesDetails, setCategoriesDetails] = useState(null);

  async function getCategoriesDetails(idd) {
    let { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/categories/${idd}`
    );
    console.log(data.data);
    setCategoriesDetails(data.data);
  }

  useEffect(() => {
    getCategoriesDetails(id);
  }, []);

  return (
    <>
      {categoriesDetails ? (
        <>
          <div className="  lsm:w-full lsm:ms-9 md:ms-20 md:w-11/12 md:m-auto  gap-x-8   gap-y-14 ">
            <>
              <div className=" relative    bg-gray-100 lsm:w-full sm:w-6/12 sm:m-auto ms-10 lsm:ms-4 px-3 shadow-lg shadow-gray-400 rounded-2xl py-10 ">
                <Link to={"/categories"}>
                  <span className="absolute top-4 right-8 ">
                    <i className="fa-solid fa-circle-xmark text-2xl cursor-pointer"></i>
                  </span>
                </Link>

                <div className="md:flex md:items-center lsm:gap-x-4 sm:gap-x-0 me-7">
                  <div>
                    <img
                      src={categoriesDetails?.image}
                      alt="#"
                      className="lg:w-4/6 me-8 mb-3 lsm:w-full"
                    />
                  </div>
                  <div className=" mt-3 ">
                    <h2 className="font-bold text-main px-1 py-1 pt-2 text-3xl f mt-7">
                      {categoriesDetails?.name}
                    </h2>
                    <h2 className="font-semibold text-gray-500 px-1 py-1 pt-2 text-2xl mt-7">
                      {categoriesDetails?.slug}
                    </h2>
                  </div>
                </div>
                <div className="">
                  <Link to={"/categories"}>
                    <button className="bg-main mb-8 lsm:w-8/12 sm:w-[50%] sm:m-auto py-2 rounded-lg text-white font-semibold my-2   ">
                      Close
                    </button>
                  </Link>
                </div>
                <Link to={"/categories"}>
                  <div className="mx-7  text-xl font-semibold my-7 underline text-green-800">
                    Go to all categories
                  </div>
                </Link>
              </div>
            </>
          </div>
        </>
      ) : (
        <div className="preloader"></div>
      )}
    </>
  );
}
