import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Booking from "../Pages/Booking/Booking";
import Book from "../Pages/Booking/Book";
import PrivateRouts from "./PrivateRouts";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"login",
            element:<Login></Login>
        },
        {
            path:"signUp",
            element:<SignUp></SignUp>
        },
        {
          path:"booking/:id",
          element:<PrivateRouts><Booking></Booking></PrivateRouts>,
          loader:({params}) =>fetch(`http://localhost:5001/services/${params.id}`)
        },
        {
          path:'book',
          element: <PrivateRouts><Book></Book></PrivateRouts>
        }
      ]
    },
  ]);

  export default router;