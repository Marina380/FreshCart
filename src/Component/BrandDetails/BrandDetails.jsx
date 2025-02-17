import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function brandDetails() {
  let { id } = useParams();
  const [brandDetails, setBrandDetails] = useState(null);
  //   const [productDetailsimg, setProductDetailsimg] = useState(null);

  async function getBrandDetails(idd) {
    let { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/brands/${idd}`
    );
    console.log(data.data);
    setBrandDetails(data.data);
    // setProductDetailsimg(data.data.images);
  }

  useEffect(() => {
    getBrandDetails(id);
  }, []);

  return (
    <>
      {brandDetails ? (
        <>
          <div className="  lsm:w-full lsm:ms-9 md:ms-20 md:w-11/12 md:m-auto  gap-x-8   gap-y-14 ">
            <>
              <div className=" relative    bg-gray-100 lsm:w-full sm:w-6/12 sm:m-auto ms-10 lsm:ms-4 px-3 shadow-lg shadow-gray-400 rounded-2xl py-10 ">
              <Link to={'/brands'}>
              <span className="absolute top-4 right-8 mb-3">

<i className="fa-solid fa-circle-xmark text-2xl cursor-pointer"></i>
</span>
                </Link>


              
                <div className="md:flex gap-x-4">
                  <div>
                    <img
                      src={brandDetails?.image}
                      alt="#"
                      className="mb-3 lg:w-4/6 me-8 lsm:w-full"
                    />
                  </div>
                  <div className=" mt-3">
                    <h2 className="font-bold text-main px-1 py-1 pt-2 text-3xl f mt-7">
                      {brandDetails?.name}
                    </h2>
                    <h2 className="font-semibold text-gray-500 px-1 py-1 pt-2 text-2xl mt-7">
                      {brandDetails?.slug}
                    </h2>
                  </div>
                </div>
                <div className="">

                <Link to={'/brands'}>
                <button className="bg-main mb-8 lsm:w-8/12 sm:w-[50%] sm:m-auto py-2 rounded-lg text-white font-semibold my-2   ">
                    Close
                  </button>
                </Link>
                
                </div>
                <Link to={'/brands'}>
                  <div className="mx-7  text-xl font-semibold my-7 underline text-green-800">
                    Go to all brands
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
