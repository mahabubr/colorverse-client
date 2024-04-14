import { createBrowserRouter } from "react-router-dom";
import Landing from "../Pages/Landing/Landing";
import Root from "../Layout/Root";
import SignUp from "../Pages/Regester/SignUp/SignUp";
import Login from "../Pages/Regester/Login/Login";
import Generate from "../Pages/Generate/Generate";
import SinglePallet from "../Pages/SinglePallet/SinglePallet";
import Collection from "../Pages/Collection/Collection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/generate",
        element: <Generate />,
      },
      {
        path: "/pallet/:id",
        element: <SinglePallet />,
      },
      {
        path: "/collection",
        element: <Collection />,
      },
    ],
  },
]);

export default router;
