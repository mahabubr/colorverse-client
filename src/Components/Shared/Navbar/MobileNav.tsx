import { IoHomeOutline } from "react-icons/io5";
import { RiAiGenerate } from "react-icons/ri";
import { FaRegUser, FaList } from "react-icons/fa";

const MobileNav = () => {
  return (
    <nav className="block md:hidden fixed bottom-0 w-full bg-white ">
      <div className="grid grid-cols-4 place-items-center py-4 px-8 border-t gap-10">
        <div>
          <IoHomeOutline />
        </div>
        <div>
          <RiAiGenerate />
        </div>
        <div>
          <FaList />
        </div>
        <div>
          <FaRegUser />
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
