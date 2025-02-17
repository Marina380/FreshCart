// import React from 'react'

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import logo from "./../../assets/finalProject assets/images/slider-image-1.jpeg";
import logo2 from "./../../assets/finalProject assets/images/slider-image-2.jpeg";
import logo3 from "./../../assets/finalProject assets/images/slider-image-3.jpeg";
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
    slidesToShow: 5,
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
          <div className=" sm:w-[95%] sm:m-auto   sm:ms-16 border-[none] lsm:ms-4 lsm:w-[120%] md:pb-16 ">
            <Slider {...settings} className="">
              <img
                src={logo3}
                className="w-[700px] h-[600px] object-center object-contain rounded-lg"
                alt=""
              />

              <img
                src={logo}
                className="w-[700px] h-[600px] object-center object-contain rounded-lg"
                alt=""
              />
              <img
                src={logo2}
                className="w-[700px] h-[600px] object-center object-contain rounded-lg"
                alt=""
              />
            </Slider>
          </div>

          <div className="md:text-center text-3xl font-semibold py-5 mb-3 text-main capitalize lsm:ms-12">
            Shop popular categoies
          </div>
          <Slider
            {...settings2}
            className="sm:ms-36 sm:my-12 lsm:ms-10 lsm:pe-3 "
          >
            {categories?.map((category) => (
              <>
                <img
                  src={category?.image}
                  className="h-[200px]  object-cover "
                  alt=""
                />
                <h3 className="mt-4">
                  {category?.name.split(" ", 2).join(" ")}
                </h3>
              </>
            ))}
          </Slider>
          {product ? (
            <div className="md:text-center text-3xl font-semibold py-5 mb-3 text-main capitalize lsm:ms-12">
              popular Products
            </div>
          ) : (
            ""
          )}
          <div className="flex flex-wrap lsm:w-full  lsm:ms-9 md:ms-20 md:w-11/12 md:m-auto  gap-x-8  gap-y-14 ">
            {product?.map((productone, index) => (
              <>
                <div
                  key={index}
                  className=" w-[24%] bg-[whitesmoke]  hover:scale-110 duration-100 home lsm:w-full md:w-[20%]  ms-7 px-3 shadow-lg shadow-gray-400 rounded-md py-2 "
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
                      id='test'
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
