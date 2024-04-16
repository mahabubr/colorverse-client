/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaSearch } from "react-icons/fa";

const UserSearchBar = ({ setSearchTerm, searchTerm }: any) => {
  return (
    <div className="relative w-full md:w-8/12 lg:w-6/12">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <FaSearch className="text-gray-400" />
      </span>
      <input
        className="pl-10 border-2 h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none w-full"
        type="search"
        name="search"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default UserSearchBar;
