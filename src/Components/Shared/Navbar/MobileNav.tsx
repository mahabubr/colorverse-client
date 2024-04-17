import { IoHomeOutline } from "react-icons/io5";
import { RiAiGenerate } from "react-icons/ri";
import { FaRegUser, FaList } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useMeQuery } from "../../../Redux/Features/Auth/AuthApi";

const MobileNav = () => {
  const { data: userData } = useMeQuery({});

  return (
    <nav className="block md:hidden fixed bottom-0 w-full bg-white ">
      <div className="grid grid-cols-4 place-items-center py-4 px-4 text-xl border-t border-orange-700 gap-10">
        <Link to="/">
          <div
            onClick={() => window.scroll(0, 0)}
            className="cursor-pointer hover:bg-gray-200 rounded-lg p-2"
          >
            <IoHomeOutline className="text-orange-800" />
          </div>
        </Link>
        <Link to="/generate">
          <div
            className="cursor-pointer hover:bg-gray-200 rounded-lg p-2"
            onClick={() => window.scroll(0, 0)}
          >
            <RiAiGenerate className="text-orange-800" />
          </div>
        </Link>
        <Link to="/collection">
          <div
            className="cursor-pointer hover:bg-gray-200 rounded-lg p-2"
            onClick={() => window.scroll(0, 0)}
          >
            <FaList className="text-orange-800" />
          </div>
        </Link>
        <Link to={`/profile/${userData?.data?.id}`}>
          <div
            className="cursor-pointer hover:bg-gray-200 rounded-lg p-2"
            onClick={() => window.scroll(0, 0)}
          >
            <FaRegUser className="text-orange-800" />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default MobileNav;
