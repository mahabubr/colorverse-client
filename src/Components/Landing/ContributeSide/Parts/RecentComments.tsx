/* eslint-disable @typescript-eslint/no-explicit-any */
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { MdSubdirectoryArrowLeft } from "react-icons/md";
import { useGetRecentCommentsQuery } from "../../../../Redux/Features/Comments/commentsApi";
import moment from "moment";

const RecentComments = () => {
  const { data, isLoading } = useGetRecentCommentsQuery({});

  return (
    <div>
      <h2 className="text-xs text-start font-bold border-b">Recent Comments</h2>
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
              <Link to={`/pallet/${con?.pallet?.id}`}>
                <div className="">
                  <h2 className="text-sm font-bold flex items-center gap-1">
                    {con?.comment.slice(0, 20)}.. <MdSubdirectoryArrowLeft />
                  </h2>
                  <p className="text-sm">{con?.user?.name}</p>
                  <p className="text-[10px] font-extralight tracking-widest ">
                    {moment(con?.createdAt).startOf("minutes").fromNow()}
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

export default RecentComments;
