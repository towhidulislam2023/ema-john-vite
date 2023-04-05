import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Shop from './Components/Shop/Shop';
import OrderReview from './Components/OrderReview/OrderReview';
import ManageInventory from './Components/ManageInventory/ManageInventory';
import { cartProductLoader } from '../utilities/cartProductLoader';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    children:[
      {
        path:"/",
        element:<Shop></Shop>,
      },
      {
        path:"/order",
        element:<Shop></Shop>
      },
      {
        path:"/review",
        element:<OrderReview></OrderReview>,
        loader: cartProductLoader
      },
      {
        path:"/manageinventory",
        element:<ManageInventory></ManageInventory>,
        
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
