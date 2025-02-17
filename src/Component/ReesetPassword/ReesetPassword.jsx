import React, { useContext } from "react";

import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";


export default function ReesetPassword() {
  let navigate = useNavigate();

  const [apiMessage, setApiMessage] = useState("");
  const [apiMessage2, setApiMessage2] = useState("");
  const [isloading, setIsloading] = useState(false);
  let {setUserToken} = useContext(UserContext);

  async function resetPassword(value) {
    setIsloading(true);

    try {
      let { data } = await axios.put(
        ` https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,
        value
      );
      console.log(data.token);
      
       setUserToken(data.token);
       localStorage.setItem("userToken", data.token);


      navigate("/");

      setIsloading(false);
      setApiMessage2(data.status);

      setApiMessage(null);
    } catch (err) {
      setApiMessage(err.response.data.message);
      setApiMessage2(null);

      setIsloading(false);
    }
  }

  let validationSchema = yup.object().shape({
    email: yup
      .string()
      .required("email is required ")
      .matches(
        /^[a-z]{7,15}[0-9]{2,3}@gmail.com$/,
        "Please enter an email address consisting of a maximum of 7 to 15 characters, then two to three numbers from 0 to 9, then @gmail.com"
      ),
    newPassword: yup
      .string()
      .required("newPassword is required ")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "Please enter Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"
      ),
  });

  let formik = useFormik({
    initialValues: {
      email: "",
      newPassword: "",
    },
    validationSchema,
    onSubmit: resetPassword,
  });
  return (
    <>
      {apiMessage ? (
        <div className="bg-red-500 sm:w-4/12 px-3 py-2 md:my-9 rounded-lg  lsm:w-[150%] lsm:ms-3 sm:m-auto     text-white text-center text-md">
          {apiMessage}
        </div>
      ) : (
        ""
      )}
      {apiMessage2 ? (
        <div className="bg-green-500 sm:w-4/12 px-3 py-2 md:my-9 rounded-lg  lsm:w-[150%] lsm:ms-3 sm:m-auto    text-white text-center text-md">
          {apiMessage2}
        </div>
      ) : (
        ""
      )}

      <form
        className=" bg-gray-200 py-9 mx-auto rounded-lg w-[60%] absolute top-[35%] right-0 left-0 px-10 sm:mt-10
          "
        onSubmit={formik.handleSubmit}
      >
        <div className="relative z-0 lsm:w-[150%] md:w-full mb-5 group md:ms-0 lsm:ms-3 ">
          <input
            type="email"
            name="email"
            id="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-main peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute  text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main peer-focus:dark:text-main peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            your email
          </label>
        </div>
        {formik.errors.email && formik.touched.email ? (
          <div
            className="p-4 mb-4 text-sm text-red-800 rounded-lg lsm:w-[100%]  md:text-center md:w-full "
            role="alert"
          >
            <span className="font-medium">{formik.errors.email}</span>
          </div>
        ) : null}

        <div className="relative z-0 lsm:w-[150%] md:w-full mb-5 group md:ms-0 lsm:ms-3 ">
          <input
            type="password"
            name="newPassword"
            id="newPassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.newPassword}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-200 appearance-none  focus:outline-none focus:ring-0 focus:border-main peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="newPassword"
            className="peer-focus:font-medium absolute  text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main peer-focus:dark:text-main peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            newPassword
          </label>
        </div>
        {formik.errors.newPassword && formik.touched.newPassword ? (
          <div
            className="p-4 mb-4 text-sm text-red-800 rounded-lg lsm:w-[100%]  md:text-center md:w-full "
            role="alert"
          >
            <span className="font-medium">{formik.errors.newPassword}</span>
          </div>
        ) : null}

        {isloading ? (
          <button
            type="submit"
            className="text-white bg-main lsm:ms-3 md:ms-0 hover:bg-main focus:ring-4 focus:outline-none focus:ring-main font-medium rounded-lg text-sm w-full lsm:w-auto px-5 py-2.5 text-c "
          >
            <i className="fa-solid fa-spinner fa-spin" />
          </button>
        ) : (
          <button
            type="submit"
            className="text-white bg-main lsm:ms-3 md:ms-0 capitalize text-md hover:bg-main focus:ring-4 focus:outline-none focus:ring-main font-medium rounded-2xl  w-full lsm:w-auto px-5 py-2.5 text-c "
          >
            change password
          </button>
        )}
      </form>
    </>
  );
}
