import { createBrowserRouter } from "react-router-dom";
import Landing from "../Pages/Landing/Landing";
import Root from "../Layout/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
    ],
  },
]);

export default router;
