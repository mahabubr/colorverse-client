/* eslint-disable @typescript-eslint/no-explicit-any */
import brand from "../../../assets/brand.png";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { Button } from "@material-tailwind/react";
import ProfileMenu from "./Parts/ProfileMenu";

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
    <div className="hidden md:block sticky top-0 bg-white z-50">
      <nav className="mx-auto py-2 px-8 shadow-md grid grid-cols-5 items-center gap-10 ">
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
            styling={{ height: "30px" }}
          />
        </div>
        <div className="col-span-1 flex gap-6 justify-center">
          <div>
            <Button
              color="deep-orange"
              size="sm"
              variant="gradient"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Generate
            </Button>
          </div>
          <ProfileMenu />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
