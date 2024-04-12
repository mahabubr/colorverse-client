/* eslint-disable @typescript-eslint/no-explicit-any */
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import { Slide, ToastContainer } from "react-toastify";
import { useCallback, useEffect } from "react";
import { useRefreshUserMutation } from "./Redux/Features/Auth/AuthApi";
import Cookies from "js-cookie";

const App = () => {
  // handle refresh token

  const [createRefreshToken] = useRefreshUserMutation();

  const refreshToken = useCallback(() => {
    const payload = { token: Cookies.get("token") };
    createRefreshToken({ payload }).then((res: any) => {
      const token = res?.data?.data;
      Cookies.set("token", token, { expires: 30, secure: true });
    });
  }, [createRefreshToken]);

  useEffect(() => {
    // do
    const interval = setInterval(() => {
      refreshToken();
    }, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, [refreshToken]);

  return (
    <main>
      <RouterProvider router={router} />
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        className="text-xs"
        transition={Slide}
        limit={1}
      />
    </main>
  );
};

export default App;
