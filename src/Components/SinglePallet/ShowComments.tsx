/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetCommentsQuery } from "../../Redux/Features/Comments/commentsApi";
import Skeleton from "../Shared/Skeleton/Skeleton";
import CommentCard from "./Parts/CommentCard";

const ShowComments = ({ id }: { id: string }) => {
  const { data, isLoading } = useGetCommentsQuery({ id });

  return (
    <div className="lg:w-7/12 mx-auto ">
      {isLoading ? (
        <div className="grid grid-cols-2 lg:grid-cols-5">
          {Array.from({ length: 10 }).map((_: any, i: number) => (
            <Skeleton key={i} />
          ))}
        </div>
      ) : data && data?.data && data?.data?.length > 0 ? (
        <div className="w-full space-y-10">
          {data?.data?.map((com: any, i: number) => (
            <CommentCard key={i} com={com} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <small className="text-xs text-center ">
            Comment not found. please comment it.
          </small>
        </div>
      )}
    </div>
  );
};

export default ShowComments;
