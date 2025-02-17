// import React from 'react'

import axios from "axios";
import { useEffect, useState ,useContext} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { WishlistContext } from "../../Context/Wishlist";



export default function AllProduct() {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
    let {  addToCart } = useContext(CartContext);
    let { addToCartWishlist } = useContext(WishlistContext);

  


  async function getProduct() {
    try {
      let { data } = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/products"
      );

      setProduct(data.data);
      console.log(data.data);
    } catch (err) {
      setError(err.response.data.message);
    }
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      {product ? (
        <>
          {product ? (
            <div className=" text-start m-auto w-5/6 text-3xl font-semibold py-5 mb-3 text-main capitalize">
              All Products
            </div>
          ) : (
            ""
          )}
          <div className="flex flex-wrap lsm:w-full lsm:ms-9 md:ms-20 md:w-11/12 md:m-auto  gap-x-8  gap-y-14 ">
            {product?.map((productone, index) => (
              <>
                <div
                  key={index}
                  className=" w-[24%] bg-[whitesmoke]  hover:scale-110 duration-100 home lsm:w-full md:w-[20%]  ms-7 px-3 shadow-lg shadow-gray-400 rounded-md py-2 "
                >
                  <Link to={`/productDetailstwo/${productone.id}/${productone.category.name}`}>
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
                     className="bg-main w-9/12  py-2 px-6 rounded-lg text-white font-semibold my-2   btn">
                      Add To Cart
                    </button>
                    <i
                                          onClick={() => addToCartWishlist(productone.id)}

                     className="fa-regular fa-heart text-3xl cursor-pointer text-red-600 w-2/12 mt-4"></i>
                  </div>
                </div>
              </>
            ))}
          </div>
        </>
      ) : (
        <div className="preloader"></div>
      )}
    </>
  );
}
