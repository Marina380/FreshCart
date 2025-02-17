import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from 'react-hot-toast';


export let WishlistContext = createContext();

export default function WishlistContextProvider(props) {  
const [addWishlist, setAddWishlist] = useState(null)

  async  function addToCartWishlist(id) {



    try {
        let x=  await axios.post('https://ecommerce.routemisr.com/api/v1/wishlist' ,{productId :id},{headers :{token :localStorage.getItem('userToken')}})
        getWishlist()

              {toast.success("The product has been successfully added to your favorites list")}

    } catch (error) {
      
        console.log(error);
        {toast.error("Unable to add products to favorites")}

        
    }
  }

  async  function getWishlist() {



    try {
        let {data}=  await axios.get('https://ecommerce.routemisr.com/api/v1/wishlist' ,{headers :{token :localStorage.getItem('userToken')}})
        setAddWishlist(data.data)
        console.log(data.data);
        
        

    } catch (error) {
        console.log(error);
        
    }
  }

 async  function deletewishlistCart(id) {



     try {
         let {data}=  await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}` ,{headers :{token :localStorage.getItem('userToken')}})
        
          setAddWishlist(data.data)
         {toast.success(data.status)}
         getWishlist()



     } catch (error) {
         console.log(error);
        
     }
  }
  useEffect(()=>{
    getWishlist()
  },[])

  return (
    <WishlistContext.Provider value={{  addToCartWishlist , addWishlist , getWishlist  ,deletewishlistCart}}>
      {props.children}  
    </WishlistContext.Provider>
  );
}
