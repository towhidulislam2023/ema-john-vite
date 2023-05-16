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
import Login from './Components/Login/Login';
import Registar from './Components/Registar/Registar';
import AuthContex from './provider/AuthContex';
import PrivateRoute from './routes/PrivateRoute';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
        loader: () => fetch("https://ema-john-server-theta.vercel.app/totalproducts")
      },
      {
        path: "/review",
        element: <PrivateRoute><OrderReview></OrderReview></PrivateRoute>,
        loader: cartProductLoader
      },
      {
        path: "/manageinventory",
        element: <ManageInventory></ManageInventory>,

      },
      {
        path: "/login",
        element: <Login></Login>,

      },
      {
        path: "/registar",
        element: <Registar></Registar>,

      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContex>
      <RouterProvider router={router} />
    </AuthContex>

  </React.StrictMode>
);
