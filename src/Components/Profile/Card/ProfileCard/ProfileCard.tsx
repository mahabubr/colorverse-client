import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

/* eslint-disable @typescript-eslint/no-explicit-any */
function ProfileCard({ user }: any) {
  return (
    <div>
      <div className="relative flex flex-col items-center rounded-md p-4 border shadow-inner">
        <div className="relative flex h-32 w-full justify-center rounded-md bg-cover">
          <img
            src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png"
            className="absolute flex h-32 w-full justify-center rounded-xl bg-cover"
            alt="banner"
          />
          <div className="absolute -bottom-10 flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-orange-700">
            <div className="text-center">
              <p className="text-xl font-bold text-white">
                {user?.contribute}*
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center">
          <h4 className="text-sm font-medium">{user?.name}</h4>
          <p className="text-xs font-extralight tracking-wider">
            {user?.email}
          </p>
          <p className="text-xs font-light text-orange-700 uppercase tracking-wider mt-4">
            {user?.role}
          </p>
          <p className="text-xs text-gray-600 tracking-wider">{user?.bio}</p>
        </div>
        <div className="mt-6 mb-3 flex gap-14 md:gap-14">
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
}

export default ProfileCard;
