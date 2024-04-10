import { createBrowserRouter } from "react-router-dom";
import Landing from "../Pages/Landing/Landing";
import Root from "../Layout/Root";
import SignUp from "../Pages/Regester/SignUp/SignUp";
import Login from "../Pages/Regester/Login/Login";

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
    ],
  },
]);

export default router;
