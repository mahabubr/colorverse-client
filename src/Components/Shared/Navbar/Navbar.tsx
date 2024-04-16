/* eslint-disable @typescript-eslint/no-explicit-any */
import brand from "../../../assets/brand.png";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { Button } from "@material-tailwind/react";
import ProfileMenu from "./Parts/ProfileMenu";
import { Link } from "react-router-dom";
import { useMeQuery } from "../../../Redux/Features/Auth/AuthApi";
import { PiMagicWand } from "react-icons/pi";
import { useGetPalletFilterOptionsQuery } from "../../../Redux/Features/PalletFilter/palletFilterApi";
import { useDispatch } from "react-redux";
import {
  removeSearch,
  setSearch,
} from "../../../Redux/Slice/Search/searchSlice";

const Navbar = () => {
  const { data: userData, isSuccess } = useMeQuery({});

  const { data: searchData } = useGetPalletFilterOptionsQuery({});
  const dispatch = useDispatch();

  const items = searchData?.data?.map((sc: string, i: number) => ({
    id: i,
    name: sc,
  }));

  const handleOnSearch = () => {};

  const handleOnHover = () => {};

  const handleOnSelect = (item: any) => {
    dispatch(setSearch(item));
    console.log(item);
  };

  const handleOnFocus = () => {};

  const handleOnClear = () => {
    dispatch(removeSearch());
  };

  const formatResult = (item: any) => {
    return (
      <>
        <p className="text-xs font-extralight tracking-widest">{item.name}</p>
      </>
    );
  };

  return (
    <div className="hidden md:block sticky top-0 bg-white z-50  shadow-md">
      <nav className="mx-auto py-2 px-8  grid grid-cols-5 items-center gap-10   container  w-11/12">
        <div className="col-span-1">
          <Link to="/">
            <img src={brand} className="h-full w-16" alt="" />
          </Link>
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
            className="text-xs "
            onClear={handleOnClear}
            placeholder="Search"
          />
        </div>
        <div className="col-span-1 flex gap-3 justify-center">
          {isSuccess ? (
            <>
              <Link to="/generate">
                <Button
                  color="deep-orange"
                  size="sm"
                  variant="gradient"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  className="flex justify-center items-center gap-2"
                >
                  <PiMagicWand />
                  Generate
                </Button>
              </Link>
              <ProfileMenu userData={userData} />
            </>
          ) : (
            <>
              <Link to="/login">
                <Button
                  color="deep-orange"
                  size="sm"
                  variant="gradient"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button
                  color="deep-orange"
                  size="sm"
                  variant="outlined"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
