import { IoCopyOutline } from "react-icons/io5";
import { useGetUserPalletQuery } from "../../../Redux/Features/PalletFilter/palletFilterApi";
import Skeleton from "../../Shared/Skeleton/Skeleton";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import moment from "moment";
import toast from "react-hot-toast";
import { toast as toasifyToast } from "react-toastify";
import { IoMdTrash } from "react-icons/io";
import { useDeletePalletMutation } from "../../../Redux/Features/Pallet/palletApi";

/* eslint-disable @typescript-eslint/no-explicit-any */
const ProfilePallet = ({ isLoading, user, render }: any) => {
  const { data, isLoading: palletLoading } = useGetUserPalletQuery({
    id: user?.id,
  });

  const userPallet = data?.data;

  const [deletePallet] = useDeletePalletMutation();

  const copyClipboard = (color: any) => {
    navigator.clipboard.writeText(color);
    toast.success(`Copied Done ${color}`);
  };

  const handleDelete = (id: string) => {
    deletePallet({ id }).then((res: any) => {
      if (res.data.status === 200) {
        toasifyToast.success(res.data.message);
      } else {
        toasifyToast.success(res.data.data);
      }
    });
  };

  return (
    <div>
      {isLoading ? (
        <div className="grid grid-cols-2 lg:grid-cols-5">
          {Array.from({ length: 10 }).map((_: any, i: number) => (
            <Skeleton key={i} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center gap-4 md:gap-10">
          {userPallet && userPallet.length && !palletLoading ? (
            userPallet.map((pallet: any) => (
              <div key={pallet.id} className="w-full">
                <div
                  className="h-12 flex justify-center items-center cursor-pointer text-[10px] shadow-inner rounded-t-md"
                  style={{ backgroundColor: pallet?.primary.hex }}
                >
                  <p
                    className="flex justify-center items-center gap-2"
                    onClick={() => copyClipboard(pallet?.primary.hex)}
                  >
                    {pallet?.primary.hex} <IoCopyOutline />
                  </p>
                </div>
                <div
                  className="h-12 flex justify-center items-center cursor-pointer text-[10px] shadow-inner"
                  style={{ backgroundColor: pallet?.secondary.hex }}
                >
                  <p
                    className="flex justify-center items-center gap-2"
                    onClick={() => copyClipboard(pallet?.secondary.hex)}
                  >
                    {pallet?.secondary.hex} <IoCopyOutline />
                  </p>
                </div>
                <div
                  className="h-12 flex justify-center items-center cursor-pointer text-[10px] shadow-inner"
                  style={{ backgroundColor: pallet?.accent.hex }}
                >
                  <p
                    className="flex justify-center items-center gap-2"
                    onClick={() => copyClipboard(pallet?.accent.hex)}
                  >
                    {pallet?.accent.hex} <IoCopyOutline />
                  </p>
                </div>
                <div
                  className="h-12 flex justify-center items-center cursor-pointer text-[10px] shadow-inner"
                  style={{ backgroundColor: pallet?.light.hex }}
                >
                  <p
                    className="flex justify-center items-center gap-2"
                    onClick={() => copyClipboard(pallet?.light.hex)}
                  >
                    {pallet?.light.hex} <IoCopyOutline />
                  </p>
                </div>
                <div
                  className="h-12 flex justify-center items-center cursor-pointer text-[10px] shadow-inner rounded-b-md"
                  style={{ backgroundColor: pallet?.dark.hex }}
                >
                  <p
                    className="flex justify-center items-center gap-2"
                    onClick={() => copyClipboard(pallet?.dark.hex)}
                  >
                    {pallet?.dark.hex} <IoCopyOutline />
                  </p>
                </div>
                <div className="flex justify-between items-center mt-2 gap-2">
                  <div className="flex justify-between items-center gap-2">
                    {render && (
                      <p
                        onClick={() => handleDelete(pallet?.id)}
                        className="flex justify-between items-center gap-1 text-sm border cursor-pointer duration-500 py-2 px-2 rounded-md "
                      >
                        <IoMdTrash className="text-red-200" />
                      </p>
                    )}
                    <Link
                      to={`/pallet/${pallet?.id}`}
                      className="duration-500 px-2 py-2 rounded-md cursor-pointer border"
                    >
                      <FaEye />
                    </Link>
                  </div>
                  <p className="text-xs font-light">
                    {moment(pallet.createdAt).startOf("minutes").fromNow()}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="grid grid-cols-2">
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProfilePallet;
