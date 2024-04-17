import moment from "moment";

/* eslint-disable @typescript-eslint/no-explicit-any */
function CommentCard({ com }: any) {
  const cutOutName =
    com?.user?.name.split(" ")[0][0] + com?.user?.name.split(" ")[1][0];

  return (
    <div className="relative top-1/3">
      <div className="relative grid grid-cols-1 gap-4 p-4 border rounded-md border-orange-700 border-dashed">
        <div className="relative flex gap-4">
          <p className="relative rounded-lg -top-8 -mb-4  border h-20 w-20 flex justify-center items-center bg-orange-700 font-bold text-white">
            {cutOutName}
          </p>
          <div className="flex flex-col w-full">
            <div className="flex flex-row justify-between">
              <p className="relative font-medium whitespace-nowrap truncate overflow-hidden">
                {com?.user?.name}
              </p>
            </div>
            <p className="font-extralight tracking-widest text-xs">
              {moment(com?.createdAt).startOf("minutes").fromNow()}
            </p>
          </div>
        </div>
        <p className="text-sm text-gray-600">{com?.comment}</p>
      </div>
    </div>
  );
}

export default CommentCard;
