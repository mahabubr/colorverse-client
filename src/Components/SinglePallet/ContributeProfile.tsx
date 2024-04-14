import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

/* eslint-disable @typescript-eslint/no-explicit-any */
const ContributeProfile = ({ data }: any) => {
  const user = data?.data?.user;

  return (
    <div className="lg:w-6/12 mx-auto ">
      <h2 className="text-xs text-center font-bold border-b">Contributor</h2>
      <div className="mt-2 grid md:grid-cols-2 place-items-center">
        <div className="flex justify-center items-center gap-4">
          <div className="w-10 h-10 bg-orange-700 rounded-full flex justify-center items-center font-bold text-white text-sm">
            {user?.contribute}*
          </div>
          <div>
            <h2 className="text-sm font-bold">{user?.name}</h2>
            <p className="text-xs font-extralight tracking-widest">
              {user?.email}
            </p>
            <p className="text-xs text-gray-400">{user?.role}</p>
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <Link to={`/user/profile/${user?.id}`}>
            <Button
              color="black"
              size="sm"
              variant="outlined"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              className="text-[10px] px-2 py-1"
            >
              View Profile
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContributeProfile;
