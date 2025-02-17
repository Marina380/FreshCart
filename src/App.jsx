

import '@fortawesome/fontawesome-free/css/all.min.css'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './Component/Layout/Layout'
 import Home from './Component/Home/Home'
 import Brands from './Component/Brands/Brands'
 import Cart from './Component/Cart/Cart'
 import Products from './Component/Products/Products'
 import Categories from './Component/Categories/Categories'
 import Login from './Component/Login/Login'
 import Register from './Component/Register/Register'
 import Notfound from './Component/Notfound/Notfound'
import Wishlist from './Component/Wishlist/Wishlist'
import UserContextProvider from './Context/UserContext'
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute'
import ProductDetails from './Component/ProductDetails/ProductDetails'
import BrandDetails from './Component/BrandDetails/BrandDetails'
import CategoriesDetails from './Component/CatgoriesDetails/CategoriesDetails'
import ForgotPassword from './Component/ForgotPassword/ForgotPassword'
import ResetCode from './Component/ResetCode/ResetCode'
import ReesetPassword from './Component/ReesetPassword/ReesetPassword'
import CartContextProvider from './Context/CartContext'
import{ Toaster } from 'react-hot-toast';
import WishContextProvider from './Context/Wishlist'
import AllOrder from './Component/AllOrder/AllOrder'
import CheckOut from './Component/CheckOut/CheckOut'
import OrderContextProvider from './Context/OrderContext'




 let router = createHashRouter([{
  path : '' , element: <Layout/> , children :[
   {path : '/' , element :<ProtectedRoute><Home/></ProtectedRoute>},
   {path : 'brands' , element :<ProtectedRoute><Brands/></ProtectedRoute>},
   {path : 'cart' , element :<ProtectedRoute><Cart/></ProtectedRoute>},
   {path : 'products' , element :<ProtectedRoute><Products/></ProtectedRoute>},
   {path : 'categories' , element :<ProtectedRoute><Categories/></ProtectedRoute>},
   {path : 'Wishlist' , element : <ProtectedRoute><Wishlist/></ProtectedRoute>},
   {path : 'allorders' , element : <ProtectedRoute><AllOrder/></ProtectedRoute>},
   {path : 'checkout' , element : <ProtectedRoute><CheckOut/></ProtectedRoute>},
   {path : 'productDetails/:id/:category' , element : <ProtectedRoute><ProductDetails/></ProtectedRoute>},
   {path : 'productDetailstwo/:id/:category' , element : <ProtectedRoute><ProductDetails/></ProtectedRoute>},
   {path : 'brandDetails/:id' , element : <ProtectedRoute><BrandDetails/></ProtectedRoute>},
   {path : 'categoriesDetails/:id' , element : <ProtectedRoute><CategoriesDetails/></ProtectedRoute>},
   {path :'login' , element :<Login/>},
   {path :'forgotPassword' , element :<ForgotPassword/>},
   {path :'resetCode' , element :<ResetCode/>},
   {path :'reesetPassword' , element :<ReesetPassword/>},
   {path : 'register' , element :<Register/>},
 
   {path : '*' , element :<Notfound/>},
   
  ]
}])

export default function App() {

  return (
<>
<OrderContextProvider>
<WishContextProvider>
<CartContextProvider>
<UserContextProvider>
<Toaster/>

<RouterProvider router={router}>

</RouterProvider>

</UserContextProvider>
</CartContextProvider>
</WishContextProvider>

</OrderContextProvider>





</>
  )
}