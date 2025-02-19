import { useContext, useEffect, useState } from "react";
import logo from "./../../assets/finalProject assets/images/freshcart-logo.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { WishlistContext } from "../../Context/Wishlist";
import { CartContext } from "../../Context/CartContext";

export default function Navbar() {
  const [isopen, setIsopen] = useState(true);
  let { userToken, setUserToken } = useContext(UserContext);
  let { addProduct } = useContext(CartContext);
  let { addWishlist } = useContext(WishlistContext);

  let navigate = useNavigate();
  function signOut() {
    localStorage.removeItem("userToken");
    setUserToken(null);
    navigate("login");
  }

  return (
    <>
      <nav className="bg-gray-100  fixed top-0 right-0 left-0 border-gray-200 capitalize  z-50">
        <div className="mx-auto max-w-7xl  px-2 sm:px-6 lg:px-8 items-center">
          <div className="relative flex h-16  justify-between items-center">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              {isopen ? (
                <button
                  onClick={() => setIsopen(false)}
                  type="button"
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-main hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">close main menu</span>
                  {/*
      Icon when menu is closed.

      Menu open: "hidden", Menu closed: "block"
    */}
                  <i className="fa-regular fa-circle-xmark text-xl p-1" />

                  {/*
      Icon when menu is open.

      Menu open: "block", Menu closed: "hidden"
    */}
                  <svg
                    className="hidden size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              ) : (
                <button
                  onClick={() => setIsopen(true)}
                  type="button"
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-main hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">open main menu</span>
                  {/*
Icon when menu is closed.

Menu open: "hidden", Menu closed: "block"
*/}
                  <svg
                    className="block size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                  {/*
Icon when menu is open.

Menu open: "block", Menu closed: "hidden"
*/}
                  <svg
                    className="hidden size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <Link
                  to={"/"}
                  className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                  <img src={logo} className="h-8 w-36" alt="Freshcart Logo" />
                </Link>
              </div>

              <div className="hidden sm:ml-6 sm:block items-center">
                <div className="flex space-x-4 items-center ">
                  {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                  <ul className="flex  font-medium p-0  md:me-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row mt-2  ">
                    {userToken ? (
                      <>
                        <li>
                          <NavLink
                            to={"/"}
                            className="block py-2 px-3 md:p-0 text-slate-500 hover:text-main  transition delay-100 rounded-sm md:bg-transparentfont-medium text-md text-md "
                            aria-current="page"
                          >
                            Home
                          </NavLink>
                        </li>

                        <li>
                          <NavLink
                            to={"/products"}
                            className="block py-2 px-3 md:p-0  text-slate-500 hover:text-main  font-medium text-md transition delay-100 rounded-sm md:bg-transparent text-md "
                            aria-current="page"
                          >
                            Products
                          </NavLink>
                        </li>

                        <li>
                          <NavLink
                            to={"/categories"}
                            className="block py-2 px-3 md:p-0 font-medium text-md text-slate-500 hover:text-main  transition delay-100 rounded-sm md:bg-transparent text-md "
                            aria-current="page"
                          >
                            categories
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to={"/brands"}
                            className="block py-2 font-medium text-md px-3 md:p-0 text-slate-500 hover:text-main  transition delay-100 rounded-sm md:bg-transparent text-md "
                            aria-current="page"
                          >
                            Brands
                          </NavLink>
                        </li>
                      </>
                    ) : null}
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex space-x-2 items-center capitalize lsm:hidden sm:block">
              {userToken ? (
                <>
                  {/* <Link to={"https://www.instagram.com/"}>
                    <i className="fa-brands fa-instagram " />
                  </Link>
                  <Link to={"https://www.facebook.com"}>
                    <i className="fa-brands fa-facebook " />
                  </Link>
                  <Link to={"https://www.tiktok.com"}>
                    <i className="fa-brands fa-tiktok" />
                  </Link>

                  <Link to={"https://www.twitter.com "}>
                    <i className="fa-brands fa-twitter " />
                  </Link>
                  <Link to={"https://www.linkedin.com "}>
                    <i className="fa-brands fa-linkedin " />
                  </Link>
                  <Link to={"https://www.youtube.com"}>
                    <i className="fa-brands fa-youtube "></i>
                  </Link> */}
                </>
              ) : null}

              {userToken ? (
                <>
                  <Link to={"/wishlist"}>
                    <span className="mx-2 relative">
                      <i className="fa-solid fa-heart text-3xl text-main  mt-4 cursor-pointer"></i>
                      <span className="absolute -top-5 left-3 font-medium text-xl text-gray-700">
                        {addWishlist?.length}
                      </span>
                    </span>
                  </Link>
                  <Link to={"/cart"}>
                    <span className="me-3 relative">
                      <i className="fa-solid fa-cart-shopping text-3xl text-main  mt-4 cursor-pointer"></i>
                      <span className="absolute -top-5 left-3 font-medium text-xl text-gray-600">
                        {addProduct?.products?.length}
                      </span>
                    </span>
                  </Link>
                  <span
                    className=" text-slate-500 text-lg cursor-pointer  font-semibold"
                    onClick={() => signOut()}
                  >
                    SignOut
                  </span>
                </>
              ) : (
                <>
                  <Link
                    className="text-slate-500 cursor-pointer font-semibold"
                    to={"login"}
                  >
                    Login
                  </Link>
                  <Link
                    className="text-slate-500 cursor-pointer font-semibold"
                    to={"register"}
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state. */}
        <div className="sm:hidden" id="mobile-menu">
          {isopen ? (
            <div className="space-y-1  px-2 pt-2 pb-3">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              {userToken ? (
                <>
                  <Link
                    to={"/"}
                    className="block rounded-md  px-3 py-2 text-base font-medium  text-gray-600 hover:bg-main  hover:text-white "
                    aria-current="page"
                  >
                    home
                  </Link>
                  <Link
                    to={"cart"}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-main hover:text-white"
                  >
                    cart{" "}
                    <i className="fa-solid fa-cart-shopping text-green-400 " />
                  </Link>
                  <Link
                    to={"products"}
                    className="block rounded-md px-3 py-2 text-base font-medium  text-gray-600 hover:bg-main hover:text-white"
                  >
                    products
                  </Link>
                  <Link
                    to={"categories"}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-main hover:text-white"
                  >
                    categories
                  </Link>
                  <Link
                    to={"brands"}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-main hover:text-white"
                  >
                    brands
                  </Link>
                  <Link
                    to={"wishlist"}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-main hover:text-white"
                  >
                    Wishlist <i className="fa-solid fa-heart text-red-500" />
                  </Link>
                </>
              ) : null}

              {userToken ? (
                <span
                  className="block rounded-md px-3 py-2 cursor-pointer text-base font-bold text-gray-200 bg-black hover:bg-main hover:text-white text-center"
                  onClick={() => signOut()}
                >
                  signout <i className="fa-solid fa-right-from-bracket ps-1" />
                </span>
              ) : (
                <>
                  {" "}
                  <Link
                    to={"login"}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-main hover:text-white"
                  >
                    Login{" "}
                    <i className="fa-solid fa-arrow-up-right-from-square" />
                  </Link>
                  <Link
                    to={"register"}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-main hover:text-white"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          ) : null}
        </div>
      </nav>
    </>
  );
}
