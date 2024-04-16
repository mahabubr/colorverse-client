/* eslint-disable @typescript-eslint/no-explicit-any */
import { IoCopyOutline } from "react-icons/io5";
import { useMeQuery } from "../../Redux/Features/Auth/AuthApi";
import {
  useDeleteCollectionMutation,
  useGetCollectionQuery,
} from "../../Redux/Features/Collection/collectionApi";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import moment from "moment";
import Skeleton from "../Shared/Skeleton/Skeleton";
import toast from "react-hot-toast";
import { IoMdTrash } from "react-icons/io";
import { toast as toasifyToast } from "react-toastify";

const Content = () => {
  const { data: userData } = useMeQuery({});

  const { data, isLoading } = useGetCollectionQuery({ id: userData?.data?.id });
  const [deleteCollection] = useDeleteCollectionMutation();

  const collectionData = data?.data;

  const copyClipboard = (color: any) => {
    navigator.clipboard.writeText(color);
    toast.success(`Copied Done ${color}`);
  };

  const handleDelete = (id: string) => {
    deleteCollection({ id }).then((res: any) => {
      if (res.data.status === 200) {
        toasifyToast.success(res.data.message);
      } else {
        toasifyToast.success(res.data.data);
      }
    });
  };

  return (
    <div>
      <div>
        {isLoading ? (
          <div className="grid grid-cols-2 lg:grid-cols-5">
            {Array.from({ length: 10 }).map((_: any, i: number) => (
              <Skeleton key={i} />
            ))}
          </div>
        ) : collectionData && collectionData?.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-4 md:gap-10">
            {collectionData.map((pallet: any) => (
              <div key={pallet.id} className="w-full">
                <div
                  className="h-12 flex justify-center items-center cursor-pointer text-[10px] shadow-inner rounded-t-md"
                  style={{ backgroundColor: pallet?.pallet?.primary.hex }}
                >
                  <p
                    className="flex justify-center items-center gap-2"
                    onClick={() => copyClipboard(pallet?.pallet?.primary.hex)}
                  >
                    {pallet?.pallet?.primary.hex} <IoCopyOutline />
                  </p>
                </div>
                <div
                  className="h-12 flex justify-center items-center cursor-pointer text-[10px] shadow-inner"
                  style={{ backgroundColor: pallet?.pallet?.secondary.hex }}
                >
                  <p
                    className="flex justify-center items-center gap-2"
                    onClick={() => copyClipboard(pallet?.pallet?.secondary.hex)}
                  >
                    {pallet?.pallet?.secondary.hex} <IoCopyOutline />
                  </p>
                </div>
                <div
                  className="h-12 flex justify-center items-center cursor-pointer text-[10px] shadow-inner"
                  style={{ backgroundColor: pallet?.pallet?.accent.hex }}
                >
                  <p
                    className="flex justify-center items-center gap-2"
                    onClick={() => copyClipboard(pallet?.pallet?.accent.hex)}
                  >
                    {pallet?.pallet?.accent.hex} <IoCopyOutline />
                  </p>
                </div>
                <div
                  className="h-12 flex justify-center items-center cursor-pointer text-[10px] shadow-inner"
                  style={{ backgroundColor: pallet?.pallet?.light.hex }}
                >
                  <p
                    className="flex justify-center items-center gap-2"
                    onClick={() => copyClipboard(pallet?.pallet?.light.hex)}
                  >
                    {pallet?.pallet?.light.hex} <IoCopyOutline />
                  </p>
                </div>
                <div
                  className="h-12 flex justify-center items-center cursor-pointer text-[10px] shadow-inner rounded-b-md"
                  style={{ backgroundColor: pallet?.pallet?.dark.hex }}
                >
                  <p
                    className="flex justify-center items-center gap-2"
                    onClick={() => copyClipboard(pallet?.pallet?.dark.hex)}
                  >
                    {pallet?.pallet?.dark.hex} <IoCopyOutline />
                  </p>
                </div>
                <div className="md:flex justify-between items-center mt-2 gap-2">
                  <div className="flex justify-between items-center gap-2">
                    <p
                      onClick={() => handleDelete(pallet?.id)}
                      className="flex justify-between items-center gap-1 text-sm border cursor-pointer duration-500 py-2 px-2 rounded-md "
                    >
                      <IoMdTrash className="text-red-200" />
                    </p>
                    <Link
                      to={`/pallet/${pallet?.pallet?.id}`}
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
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <small className="text-xs text-center ">
              Collection not found. please collect it.
            </small>
          </div>
        )}
      </div>
    </div>
  );
};

export default Content;
