import { useContext } from "react";

import { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
// import { OrderContext } from "../../Context/OrderContext";
import { CartContext } from "../../Context/CartContext";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function CheckOut() {
  const [isloading, setisloading] = useState(false);
  let { addProduct } = useContext(CartContext);
  //   // let [idcheckout, setidcheckout] = useState('')
  //   // let { Checkout } = useContext(OrderContext);

  async function CheckOuttwo(values) {
    {
      setisloading(true);
      try {
        let { data } = await axios.post(
          `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${addProduct?._id}?url=http://localhost:5173`,
          { shippingAddress: values },
          { headers: { token: localStorage.getItem("userToken") } }
        );

        {
          toast.success(data.status);
        }
        console.log(data.session.url);
        location.href = data.session.url;
        setisloading(false);
      } catch (error) {
        console.log(error);
        setisloading(false);
      }
    }
  }

  let formik = useFormik({
    initialValues: {
      details: "",
      phone: "",
      city: "",
    },
    onSubmit: CheckOuttwo,
  });

  return (
    <>
      <div className="  text-3xl text-black bg-[#f5f5f5c9] font-medium sm:w-4/12 lg:px-3 lsm:px-3 sm:px-0 lg:py-2 lsm:py-2 sm:py-0  md:my-9 rounded-lg  lsm:w-[150%] lsm:ms-10 sm:m-auto l  lg:text-center text-md">
        Checkout <span className="text-3xl text-main font-medium"> Now</span>
      </div>

      <form
        className=" bg-gray-100 py-9 mx-auto rounded-lg md:w-[60%] lsm:w-[80%] absolute md:top-[30%] sm:top-[40%] lg:top-[25%] lsm:top-[25%] right-0 left-0 px-10 
          "
        onSubmit={formik.handleSubmit}
      >
        <div className="relative z-0 lsm:w-[150%] md:w-full mb-5 group md:ms-0 lsm:ms-3 ">
          <input
            type="text"
            name="details"
            id="details"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.details}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-main peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="details"
            className="peer-focus:font-medium absolute  text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main peer-focus:dark:text-main peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            your details
          </label>
        </div>
        <div className="relative z-0 lsm:w-[150%] md:w-full mb-5 group md:ms-0 lsm:ms-3 ">
          <input
            type="tel"
            name="phone"
            id="phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-main peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="phone"
            className="peer-focus:font-medium absolute  text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main peer-focus:dark:text-main peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            your phone
          </label>
        </div>
        <div className="relative z-0 lsm:w-[150%] md:w-full mb-5 group md:ms-0 lsm:ms-3 ">
          <input
            type="text"
            name="city"
            id="city"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.city}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-main peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="city"
            className="peer-focus:font-medium absolute  text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main peer-focus:dark:text-main peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            your city
          </label>
        </div>
        {isloading ? (
          <>
            <button
              type="submit"
              className="text-white bg-main lsm:ms-3 md:ms-0 me-8 hover:bg-main focus:ring-4 focus:outline-none focus:ring-main font-medium rounded-lg text-sm w-full lsm:w-auto px-5 py-2.5 text-c "
            >
              <i className="fa-solid fa-spinner fa-spin" />
            </button>
          </>
        ) : (
          <>
            <button
              type="submit"
              className="text-white lsm:mt-5 bg-main sm:ms-3 md:ms-0 capitalize text-md me-8
             hover:bg-main focus:ring-4 focus:outline-none focus:ring-main font-medium rounded-2xl 
              w-full lsm:w-auto px-5 py-2.5 text-center "
            >
              CheckOut{" "}
            </button>
          </>
        )}
        <Link to={"/cart"}>
          <button
            type="submit"
            className="text-white lsm:mt-5 bg-main sm:ms-3 md:ms-0 capitalize text-md sm:mx-32
             hover:bg-main focus:ring-4 focus:outline-none focus:ring-main font-medium rounded-2xl 
              w-full lsm:w-auto px-5 py-2.5 text-center "
          >
            back to cart
          </button>
        </Link>
      </form>
    </>
  );
}
