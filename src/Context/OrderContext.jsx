import axios from "axios";
import { jwtDecode } from "jwt-decode";

import { createContext, useEffect, useState } from "react";
import toast from 'react-hot-toast';


export let OrderContext = createContext();

export default function OrderContextProvider(props) {  
// const [addOrder, setAddOrder] = useState(null)
// let decoded = jwtDecode(localStorage.getItem("userToken"));
 
//   async  function gettLoggedCart() {



//     try {
//         let {data}=  await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${decoded}`)
//         console.log(data);
//          setAddOrder(data)

//     } catch (error) {
//         console.log(error);
        
//     }
//   }

 
  //  useEffect(()=>{
  //    gettLoggedCart()
  //  },[])

  return (
    <OrderContext.Provider value={{      }}>
      {props.children} 
    </OrderContext.Provider>
  );
}
