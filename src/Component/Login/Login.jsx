import { useContext, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

export default function Login() {
  let navigate = useNavigate();

  const [apiMessage, setApiMessage] = useState("");
  const [isloading, setIsloading] = useState(false);

  let { setUserToken } = useContext(UserContext);

  async function loginsubmit(value) {
    setIsloading(true);

    try {
      let { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signin",
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
  });

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: loginsubmit,
  });
  return (
    <>
      {apiMessage ? (
        <div className="bg-red-500 sm:w-4/12 px-3 py-2 rounded-lg  lsm:w-[150%] lsm:ms-3 sm:m-auto    text-white text-center text-md">
          {apiMessage}
        </div>
      ) : (
        ""
      )}

      <form
        className="md:max-w-md lsm:ms-8 sm:ms-0 md:m-auto bg-gray-100 py-6 sm:px-14 rounded-lg  "
        onSubmit={formik.handleSubmit}
      >
        <div className=" text-main mb-10 lsm:ms-5 md:ms-0  mt-3">
          <h2 className="font-bold text-2xl pb-3"> Sign in to FreshCart</h2>
          <p>Welcome back to FreshCart! Enter your email to get started.</p>
        </div>

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
            Login
          </button>
        )}
        <div className="mt-4 ms-3 text-md  text-gray-600 hover:text-green-800 ">
          <Link to={"/forgotPassword"}>
            Forgot password?
          </Link>
        </div>
        <div className="mt-4 ms-3 text-md text-green-700">
          <Link to={"/register"}>
            dont you have an account?
            <span className="text-green-900 font-bold ms-3 ">
              Register Now
            </span>{" "}
          </Link>
        </div>
      </form>
    </>
  );
}
