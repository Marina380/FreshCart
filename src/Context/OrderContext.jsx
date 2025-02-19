import axios from "axios";
import { jwtDecode } from "jwt-decode";

import { createContext , useState } from "react";


export let OrderContext = createContext();

export default function OrderContextProvider(props) {  
 let  [addOrder, setAddOrder] = useState(null)

 

 async function gettLoggedCart() {
  
  
   if (localStorage.getItem("userToken")){

try {

  
  
  let {data}=  await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${jwtDecode(localStorage.getItem("userToken"))?.id}`)
  console.log(  jwtDecode(localStorage.getItem("userToken"))?.id);

  
console.log(data);
 setAddOrder(data)
  
} catch (error) {
  console.log(error);
  
}
 



  }
  else{
    console.log('no order');
    
  }

 }
  

  







 

 


  return (
    <OrderContext.Provider value={{  addOrder ,   gettLoggedCart }}>
      {props.children} 
    </OrderContext.Provider>
  );
}
