import { createBrowserRouter } from "react-router-dom";
import Landing from "../Pages/Landing/Landing";
import Root from "../Layout/Root";
import SignUp from "../Pages/Regester/SignUp/SignUp";
import Login from "../Pages/Regester/Login/Login";
import Generate from "../Pages/Generate/Generate";
import SinglePallet from "../Pages/SinglePallet/SinglePallet";
import Collection from "../Pages/Collection/Collection";
import Profile from "../Pages/Profile/Profile";
import UserProfile from "../Pages/UserProfile/UserProfile";
import Profiles from "../Pages/Profiles/Profiles";
import EditProfile from "../Pages/Profile/EditProfile/EditProfile";
import ProtectedRoute from "./Protected/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Landing />
          </ProtectedRoute>
        ),
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
        element: (
          <ProtectedRoute>
            <Generate />
          </ProtectedRoute>
        ),
      },
      {
        path: "/pallet/:id",
        element: (
          <ProtectedRoute>
            <SinglePallet />
          </ProtectedRoute>
        ),
      },
      {
        path: "/collection",
        element: (
          <ProtectedRoute>
            <Collection />
          </ProtectedRoute>
        ),
      },
      {
        path: "/profile/:id",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/user/profile/:id",
        element: (
          <ProtectedRoute>
            <UserProfile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/profiles",
        element: (
          <ProtectedRoute>
            <Profiles />
          </ProtectedRoute>
        ),
      },
      {
        path: "/profile/edit",
        element: (
          <ProtectedRoute>
            <EditProfile />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
