import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";
import MobileNav from "../Components/Shared/Navbar/MobileNav";

const Root = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <MobileNav></MobileNav>
    </main>
  );
};

export default Root;
