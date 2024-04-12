import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import { Slide, ToastContainer } from "react-toastify";

const App = () => {
  return (
    <main>
      <RouterProvider router={router} />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
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
      />
    </main>
  );
};

export default App;
