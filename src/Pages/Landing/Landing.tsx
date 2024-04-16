/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import Content from "../../Components/Landing/Content/Content";
import ContributeSide from "../../Components/Landing/ContributeSide/ContributeSide";
import FilterSide from "../../Components/Landing/FilterSide/FilterSide";
import { useSelector } from "react-redux";
import { useMeQuery } from "../../Redux/Features/Auth/AuthApi";
import { IoIosLock } from "react-icons/io";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

const Landing = () => {
  const [filterInfo, setFilterInfo] = useState("");
  const [showModal, setShowModal] = useState(false);

  const { data: userData, isLoading } = useMeQuery({});

  const user = userData?.data;

  const { search }: any = useSelector((state) => state);

  useEffect(() => {
    if (!isLoading && (!user || !user.id)) {
      setShowModal(true);
    } else {
      setFilterInfo(search?.name);
      setShowModal(false);
    }
  }, [search, isLoading, user]);

  return (
    <section className="container mx-auto w-11/12 my-12">
      <div className="grid  lg:grid-cols-5 gap-10">
        <div className="lg:col-span-1 hidden lg:block">
          <FilterSide setFilterInfo={setFilterInfo} />
        </div>
        <div className="lg:col-span-3">
          <Content filterInfo={filterInfo} />
        </div>
        <div className="lg:col-span-1 hidden lg:block">
          <ContributeSide />
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-60 flex justify-center items-center">
          <div className="backdrop-blur-md bg-white/50 p-8 rounded-md text-center flex justify-center items-center flex-col">
            <IoIosLock className="text-9xl " />
            <p className="font-bold">Please log in to continue.</p>
            <Link to="/login">
              <Button
                color="deep-orange"
                size="sm"
                variant="gradient"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                className="mt-2"
              >
                Login
              </Button>
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default Landing;
