/* eslint-disable @typescript-eslint/no-explicit-any */
import brand from "../../../assets/brand.png";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

const items = [
  {
    id: 0,
    name: "Cobol",
  },
  {
    id: 1,
    name: "JavaScript",
  },
  {
    id: 2,
    name: "Basic",
  },
  {
    id: 3,
    name: "PHP",
  },
  {
    id: 4,
    name: "Java",
  },
];

const Navbar = () => {
  const handleOnSearch = (string: any, results: any) => {
    console.log(string, results);
  };

  const handleOnHover = (result: any) => {
    console.log(result);
  };

  const handleOnSelect = (item: any) => {
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const formatResult = (item: any) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>
          id: {item.id}
        </span>
        <span style={{ display: "block", textAlign: "left" }}>
          name: {item.name}
        </span>
      </>
    );
  };

  return (
    <nav className="mx-auto py-2 px-8 shadow-md grid grid-cols-5 items-center gap-10">
      <div className="col-span-1">
        <img src={brand} className="h-full w-16" alt="" />
      </div>
      <div className="col-span-3 border-x px-4">
        <ReactSearchAutocomplete
          items={items}
          onSearch={handleOnSearch}
          onHover={handleOnHover}
          onSelect={handleOnSelect}
          onFocus={handleOnFocus}
          autoFocus
          formatResult={formatResult}
        />
      </div>
      <div className="col-span-1">
        <button className="button-primary">Generate</button>
        <button className="button-secondary">Dashboard</button>
      </div>
    </nav>
  );
};

export default Navbar;
