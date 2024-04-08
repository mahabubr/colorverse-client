import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";

const Root = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </main>
  );
};

export default Root;
