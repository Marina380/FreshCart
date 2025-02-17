import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from 'react-hot-toast';


export let CartContext = createContext();

export default function CartContextProvider(props) {  
const [addProduct, setAddProduct] = useState(null)


    function test() {
        console.log('test')
        ;

    }
  async  function addToCart(id) {



    try {
        let x=  await axios.post('https://ecommerce.routemisr.com/api/v1/cart' ,{productId :id},{headers :{token :localStorage.getItem('userToken')}})
        gettLoggedCart()
        console.log(id);

              {toast.success("The product has been added successfully")}

    } catch (error) {
        console.log(error);
        {toast.error("Unable to add products")}

        
    }
  }
  async  function updateLoggedCart(id ,count) {



    try {
        let {data}=  await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}` ,{ 
          count  },{headers :{token :localStorage.getItem('userToken')}})
        console.log(data);
        
        setAddProduct(data)
        {toast.success(data.status)}
         gettLoggedCart()



    } catch (error) {
        console.log(error);
        
    }
  }
  async  function gettLoggedCart() {



    try {
        let {data}=  await axios.get('https://ecommerce.routemisr.com/api/v1/cart' ,{headers :{token :localStorage.getItem('userToken')}})
        console.log(data.data);
        setAddProduct(data.data)

    } catch (error) {
        console.log(error);
        
    }
  }

  async  function deleteLoggedCart(id) {



    try {
        let {data}=  await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}` ,{headers :{token :localStorage.getItem('userToken')}})
        console.log(data);
        
         setAddProduct(data)
        {toast.success(data.status)}
        gettLoggedCart()



    } catch (error) {
        console.log(error);
        
    }
  }
  useEffect(()=>{
    gettLoggedCart()
  },[])

  return (
    <CartContext.Provider value={{ test ,addToCart , addProduct , gettLoggedCart ,updateLoggedCart ,deleteLoggedCart}}>
      {props.children}  
    </CartContext.Provider>
  );
}
