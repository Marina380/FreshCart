import React, { useContext, useState } from "react";
import style from "./Register.module.css";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

export default function Register() {
  let navigate = useNavigate();
  const [apiMessage, setApiMessage] = useState("");
  const [isloading, setIsloading] = useState(false);
  let { setUserToken } = useContext(UserContext);
  async function registersubmit(value) {
    setIsloading(true);

    try {
      let { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signup",
        value
      );

      localStorage.setItem("userToken", data.token);
      setUserToken(data.token);
      setIsloading(false);

      navigate("/");
    } catch (err) {
      setApiMessage(err.response.data.message);
      setIsloading(false);
    }
  }
  let validationSchema = yup.object().shape({
    name: yup
      .string()
      .required("name is required ")
      .matches(
        /^[a-z0-9_-]{3,15}$/,
        "Please enter one or two words that may include _ and - and are 3 to 16 characters long."
      ),
    email: yup
      .string()
      .required("email is required ")
      .matches(
        /^[a-z]{7,15}[0-9]{2,3}@gmail.com$/,
        "Please enter an email address consisting of a maximum of 7 to 15 characters, then two to three numbers from 0 to 9, then @gmail.com"
      ),

    password: yup
      .string()
      .required("password is required ")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "Please enter Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"
      ),

    rePassword: yup
      .string()
      .required("rePassword is required ")
      .oneOf([yup.ref("password")], "rePassword and password dont match"),

    phone: yup
      .string()
      .required("phone is required ")
      .matches(/^01[1250][0-9]{8}$/, "Please enter egyption number"),
  });

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema,
    onSubmit: registersubmit,
  });
  return (
    <>
      {apiMessage ? (
        <div className="bg-red-500 sm:w-4/12 px-3 py-2 rounded-lg  lsm:w-[150%]  lsm:m-auto    text-white text-center text-md">
          {apiMessage}
        </div>
      ) : (
        ""
      )}

      <form
        className="md:max-w-md  md:m-auto  bg-gray-100 py-12 px-12 rounded-xl lsm:ms-2"
        onSubmit={formik.handleSubmit}
      >
        <div className="md:text-center  text-main font-bold text-2xl mb-10  md:ms-10  mt-3">
          Register Now
        </div>

        <div className="relative z-0 lsm:w-[150%] md:w-full  mb-5 group md:ms-0 lsm:ms-3 ">
          <input
            type="text"
            name="name"
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-main peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="name"
            className="peer-focus:font-medium absolute  text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main peer-focus:dark:text-main peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            your name
          </label>
        </div>
        {formik.errors.name && formik.touched.name ? (
          <div
            className="p-4 mb-4 text-sm text-red-800 lsm:w-[150%]  sm:text-center md:w-full rounded-lg"
            role="alert"
          >
            <span className="font-medium">{formik.errors.name}</span>
          </div>
        ) : null}

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
            className="p-4 mb-4 text-sm text-red-800 rounded-lg lsm:w-[150%]  sm:text-center md:w-full "
            role="alert"
          >
            <span className="font-medium">{formik.errors.email}</span>
          </div>
        ) : null}
        <div className="relative z-0 lsm:w-[150%] md:w-full mb-5 group md:ms-0 lsm:ms-3 ">
          <input
            type="password"
            name="password"
            id="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-main peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="password"
            className="peer-focus:font-medium absolute   text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main peer-focus:dark:text-main peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            your password
          </label>
        </div>
        {formik.errors.password && formik.touched.password ? (
          <div
            className="p-4 mb-4 text-sm text-red-800 rounded-lg lsm:w-[150%]  sm:text-center md:w-full  dark:text-red-400"
            role="alert"
          >
            <span className="font-medium">{formik.errors.password}</span>
          </div>
        ) : null}
        <div className="relative z-0 lsm:w-[150%] md:w-full mb-5 group md:ms-0 lsm:ms-3 ">
          <input
            type="password"
            name="rePassword"
            id="rePassword"
            value={formik.values.rePassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-main peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="rePassword"
            className="peer-focus:font-medium absolute  text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main peer-focus:dark:text-main peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            your rePassword
          </label>
        </div>
        {formik.errors.rePassword && formik.touched.rePassword ? (
          <div
            className="p-4 mb-4 text-sm text-red-800 rounded-lg lsm:w-[150%]  sm:text-center md:w-full "
            role="alert"
          >
            <span className="font-medium">{formik.errors.rePassword}</span>
          </div>
        ) : null}
        <div className="relative z-0 lsm:w-[150%] md:w-full mb-5 group md:ms-0 lsm:ms-3 ">
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
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
        {formik.errors.phone && formik.touched.phone ? (
          <div
            className="p-4 mb-4 text-sm text-red-800 rounded-lg lsm:w-[150%]  sm:text-center md:w-full "
            role="alert"
          >
            <span className="font-medium">{formik.errors.phone}</span>
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
            className="text-white bg-main lsm:ms-3 md:ms-0 hover:bg-main focus:ring-4 focus:outline-none focus:ring-main font-medium rounded-lg text-sm w-full lsm:w-auto px-5 py-2.5 text-c "
          >
            Submit
          </button>
        )}
        <div className="mt-4 ms-3 text-md text-green-700">
          <Link to={"/"}>
            do you have an account?
            <span className="text-green-900 font-bold ms-3 ">
              Login Now
            </span>{" "}
          </Link>
        </div>
      </form>
    </>
  );
}
