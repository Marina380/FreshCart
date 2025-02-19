// import React from 'react'
import style from "./Home.module.css";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import logo from "./../../assets/finalProject assets/images/slider-image-1.jpeg";
import logo2 from "./../../assets/finalProject assets/images/slider-image-2.jpeg";
import logo3 from "./../../assets/finalProject assets/images/slider-image-3.jpeg";
import logo5 from "./../../assets/finalProject assets/images/grocery-banner-2.jpeg";
import logo4 from "./../../assets/finalProject assets/images/blog-img-1.jpeg";

import { CartContext } from "../../Context/CartContext";
import { WishlistContext } from "../../Context/Wishlist";

// import style from "./Home.module.css";

export default function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
  };
  var settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState(null);
  const [errortwo, setErrortwo] = useState(null);
  let { addToCart } = useContext(CartContext);
  let { addToCartWishlist } = useContext(WishlistContext);

  async function getProduct() {
    try {
      let { data } = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/products"
      );

      setProduct(data.data);
    } catch (err) {
      setError(err.response.data.message);
    }
  }

  async function getCategories() {
    try {
      let { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/categories`
      );

      setCategories(data.data);
    } catch (err) {
      setErrortwo(err.response.data.message);
    }
  }

  useEffect(() => {
    getProduct();
    getCategories();
  }, []);

  return (
    <>
      {product ? (
        <>
          <div className="      border-[none]  md:pb-16 ">
            <div
              className={`${style.containerr} sm:ml-auto md:ml-14 lg:ms-52 sm:w-[80%]  lsm:w-[110%] lsm:ms-3   `}
            >
              <div className={style.logotwo}>
                <img
                  src={logo}
                  className=" lsm:w-[200px] md:w-[300px] lsm:h-[100px] md:h-[125px] lg:h-[200px] object-cover object-center    "
                  alt=""
                />
              </div>
              <div className={style.logothree}>
                <img
                  src={logo2}
                  className=" lsm:w-[200px] md:w-[300px]  lsm:h-[100px] md:h-[125px] lg:h-[200px] object-cover object-center  "
                  alt=""
                />
              </div>
              <div className={style.logoone}>
                <Slider {...settings} className="">
                  <img
                    src={logo5}
                    className="  lsm:w-[400px] md:w-[1000px] lsm:h-[200px] md:h-[250px] lg:h-[400px] object-cover object-right "
                    alt=""
                  />
                  <img
                    src={logo4}
                    className="  lsm:w-[400px] md:w-[1000px] lsm:h-[200px] md:h-[250px] lg:h-[400px] object-cover object-right "
                    alt=""
                  />
                  <img
                    src={logo3}
                    className="  lsm:w-[400px] md:w-[1000px] lsm:h-[200px] md:h-[250px] lg:h-[400px] object-cover object-right "
                    alt=""
                  />
                </Slider>
              </div>
            </div>
          </div>

          <div className="md:text-center sm:text-3xl lsm:mt-7 sm:mt-2 font-semibold lsm:py-5 sm:py-2 mb-3 text-main capitalize lsm:ms-12">
            Shop popular categoies
          </div>
          <Slider
            {...settings2}
            className="lg:ms-28 sm:my-12 lsm:ms-3 lg:w-[90%]  lsm:pe-3 max-w-none  lsm:w-[110%]"
          >
            {categories?.map((category) => (
              <>
                <img
                  src={category?.image}
                  className="sm:h-[200px] lg:h-[250px] lsm:h-[150px] lg:w-[250px]   object-cover lsm:object-center lg:object-top "
                  alt=""
                />
                <h3 className="mt-4">
                  {category?.name.split(" ", 2).join(" ")}
                </h3>
              </>
            ))}
          </Slider>
          {product ? (
            <div className="md:text-center text-3xl font-semibold lsm:py-9 sm:py-6 mb-3 text-main capitalize lsm:ms-6">
              popular Products
            </div>
          ) : (
            ""
          )}
          <div className="flex flex-wrap lsm:w-full  lsm:ms-7 sm:ms-9 md:ms-20 md:w-11/12 md:m-auto  gap-x-8  gap-y-14 ">
            {product?.map((productone, index) => (
              <>
                <div
                  key={index}
                  className="sm:w-[24%] bg-[whitesmoke]  hover:scale-110 duration-100 home lsm:w-full md:w-[20%]  sm:ms-7 lsm:px-3 shadow-lg shadow-gray-400 rounded-md py-2 "
                >
                  <Link
                    to={`productDetails/${productone.id}/${productone.category.name}`}
                  >
                    <img
                      src={productone?.imageCover}
                      alt={productone?.title}
                      className="w-full"
                    />
                    <h3 className="font-semibold text-main px-1 py-1 pt-2 text-xl">
                      {productone?.category.name}
                    </h3>

                    <h4 className="font-medium px-1  text-base">
                      {productone?.title.split(" ", 2).join(" ")}
                    </h4>
                    <div className="flex justify-between py-4">
                      {productone.priceAfterDiscount ? (
                        <>
                          <span className="text-green-900 font-medium line-through">
                            {productone?.price} EGP
                          </span>
                          <span className="text-green-900 font-medium">
                            {productone?.priceAfterDiscount} EGP
                          </span>
                        </>
                      ) : (
                        <span className="text-green-900 font-medium">
                          {productone?.price} EGP
                        </span>
                      )}

                      <span>
                        <i className="fa-solid fa-star text-yellow-300 pe-1"></i>
                        {productone?.ratingsAverage}
                      </span>
                    </div>
                  </Link>

                  <div className="flex justify-between">
                    <button
                      onClick={() => addToCart(productone.id)}
                      className="bg-main w-9/12  py-2 px-6 rounded-lg text-white font-semibold my-2   btn"
                    >
                      Add To Cart
                    </button>
                    <i
                      onClick={() => addToCartWishlist(productone.id)}
                      id="test"
                      className="fa-regular fa-heart text-3xl text-red-600 w-2/12 mt-4 cursor-pointer"
                    ></i>
                  </div>
                </div>
              </>
            ))}
          </div>
        </>
      ) : (
        <div className="preloader my-6"></div>
      )}
    </>
  );
}
