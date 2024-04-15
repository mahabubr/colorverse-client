/* eslint-disable @typescript-eslint/no-explicit-any */
import Skeleton from "react-loading-skeleton";
import { useGetRecentUsersQuery } from "../../../../Redux/Features/User/userApi";
import { Link } from "react-router-dom";
import { MdSubdirectoryArrowLeft } from "react-icons/md";

const RecentUsers = () => {
  const { data, isLoading } = useGetRecentUsersQuery({});

  return (
    <div>
      <h2 className="text-xs text-start font-bold border-b">Recent Users</h2>
      <div className="overflow-scroll h-60 p-2 space-y-3 mt-3">
        {isLoading ? (
          <>
            {Array.from({ length: 20 }).map((_: any, i: number) => (
              <Skeleton key={i} />
            ))}
          </>
        ) : (
          data?.data &&
          data?.data?.map((con: any, i: number) => (
            <div key={i}>
              <Link to={`/user/profile/${con?.id}`}>
                <div className="">
                  <h2 className="text-sm font-bold flex items-center gap-1">
                    {con?.name} <MdSubdirectoryArrowLeft />
                  </h2>
                  <p className="text-xs font-extralight tracking-widest">
                    {con?.email}
                  </p>
                  <p className="text-xs text-gray-400">
                    contribute :{" "}
                    <span className="font-bold text-orange-700">
                      {con?.contribute}
                    </span>
                  </p>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
      <div className="text-end font-medium tracking-widest underline cursor-pointer">
        <Link to="/profiles">
          <small>View All</small>
        </Link>
      </div>
    </div>
  );
};

export default RecentUsers;
