import axios from "axios";
import { jwtDecode } from "jwt-decode";

import { createContext , useState } from "react";


export let OrderContext = createContext();

export default function OrderContextProvider(props) {  
 let  [addOrder, setAddOrder] = useState(null)

 let [decoded, setdecoded] = useState(null)
 

 async function gettLoggedCart() {
  


  if (localStorage.getItem("userToken")){

try {
  setdecoded(jwtDecode(localStorage.getItem("userToken")));
  let {data}=  await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${ decoded}`)
console.log(data);
 setAddOrder(data)
  
} catch (error) {
  console.log(error);
  
}
 



  }

 }
  

  







 

 


  return (
    <OrderContext.Provider value={{  addOrder ,   gettLoggedCart }}>
      {props.children} 
    </OrderContext.Provider>
  );
}
