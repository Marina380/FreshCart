import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { WishlistContext } from "../../Context/Wishlist";

export default function ProductDetailstwo() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
    arrows: false,
  };
  let { addToCart } = useContext(CartContext);
  let { addToCartWishlist } = useContext(WishlistContext);

  let { id, category } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [productDetailsimg, setProductDetailsimg] = useState(null);
  const [relatedproductuct, setRelatedproduct] = useState(null);

  const [error, setError] = useState(null);

  async function getProductDetails(id) {
    let { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products/${id}`
    );
    setProductDetails(data.data);
    setProductDetailsimg(data.data.images);
  }

  async function getProduct() {
    try {
      let { data } = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/products"
      );

      let arr = data.data.filter(
        (productrelated) => productrelated.category.name == category
      );
      setRelatedproduct(arr);
    } catch (err) {
      setError(err.response.data.message);
    }
  }
  useEffect(() => {
    getProductDetails(id);
    getProduct();
  }, [id, category]);

  return (
    <>
      {productDetails ? (
        <>
          {productDetails ? (
            <div className="text-center text-3xl font-semibold py-5 mb-3 lsm:ms-20 text-main capitalize">
              {productDetails.category.name} Details
            </div>
          ) : (
            ""
          )}
          <>
            <div className="   home lsm:w-full  md:gap-x-3 md:flex justify-center items-center md:m-0 md:ms-7 lsm:pe-24 lsm:ps-14 md:px-20 md:bg-slate-100 sm:rounded-md py-2 ">
              <div className="md:w-4/12 lsm:w-[200%] sm:w-[50%]  ">
                <Slider {...settings}>
                  {productDetailsimg.map((imgg) => (
                    <>
                      <img
                        src={imgg}
                        alt={imgg?.title}
                        className="w-full rounded-2xl"
                      />
                    </>
                  ))}
                </Slider>
              </div>
              <div className="w-8/12 md:ms-6 md:px-5 py-9 lsm:w-[200%]">
                <h4 className="font-semibold px-1  text-2xl">
                  {productDetails?.title.split(" ", 2).join(" ")}
                </h4>
                <p className="font-medium  px-1 py-1 pt-2 text-lg">
                  {productDetails?.description}
                </p>
                <h3 className="font-semibold text-main px-1 py-1 pt-2 text-xl">
                  {productDetails?.category.name}
                </h3>
                <div className="flex justify-between py-4 px-5 pe-7">
                  {productDetails.priceAfterDiscount ? (
                    <>
                      <span className="text-green-900 font-medium line-through">
                        {productDetails?.price} EGP
                      </span>
                      <span className="text-green-900 font-medium">
                        {productDetails?.priceAfterDiscount} EGP
                      </span>
                    </>
                  ) : (
                    <span className="text-green-900 font-medium">
                      {productDetails?.price} EGP
                    </span>
                  )}

                  <span>
                    <i className="fa-solid fa-star text-yellow-300 pe-1"></i>
                    {productDetails?.ratingsAverage}
                  </span>
                  <i
                    onClick={() => addToCartWishlist(id)}
                    className="fa-regular fa-heart text-3xl text-red-600 w-2/12  cursor-pointer"
                  ></i>
                </div>

                <div className="">
                  <button
                    onClick={() => addToCart(id)}
                    className="bg-main md:w-full lsm:w-full sm:w-8/12 py-2 md:px-6 rounded-lg text-white font-semibold my-2   btn"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="text-center text-3xl font-semibold  mb-3 lsm:ms-20 py-20 text-main capitalize">
              related product
            </div>
            <div className="flex flex-wrap lsm:w-full lsm:ms-9 md:ms-20 md:w-11/12 md:m-auto  gap-x-8  gap-y-14 ">
              {relatedproductuct?.map((productone, index) => (
                <>
                  <div
                    key={index}
                    className=" w-[24%] bg-[whitesmoke]  hover:scale-110 duration-100 home lsm:w-full md:w-[20%]  ms-7 px-3 shadow-lg shadow-gray-400 rounded-md py-2 "
                  >
                    <Link
                      to={`/productDetailstwo/${productone.id}/${productone.category.name}`}
                    >
                      <img
                        src={productone?.imageCover}
                        alt={productone?.title}
                        className="lsm:w-full sm:w-[600px]"
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
                        className="fa-regular fa-heart text-3xl text-red-600 w-2/12 mt-4 cursor-pointer"
                      ></i>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </>
        </>
      ) : (
        <div className="preloader"></div>
      )}
    </>
  );
}
