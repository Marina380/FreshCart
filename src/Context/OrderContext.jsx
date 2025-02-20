 import axios from "axios";
 import { jwtDecode } from "jwt-decode";

import { createContext, useContext, useEffect, useState  } from "react";


export let OrderContext = createContext();

export default function OrderContextProvider(props) {  

   let  [addorder, setorder] = useState('')
 

async function getallorder() {
  
  
  
// if (localStorage.getItem("userToken")){

try {

   let {data}=  await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${  jwtDecode(localStorage.getItem("userToken"))?.id   }`)
   console.log(  jwtDecode(localStorage.getItem("userToken"))?.id);
   console.log(data);
   setorder(data);}
    catch (error) 
    {console.log(error)  }


 

    }

  



  useEffect(()=>{
    getallorder()
  },[])




 

 


  return (
    <OrderContext.Provider value={{addorder,  getallorder  }}>
      {props.children} 
    </OrderContext.Provider>
  );
}


