/* eslint-disable @typescript-eslint/no-explicit-any */
import moment from "moment";
import toast from "react-hot-toast";
import { FaHeart, FaLink } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";
import Skeleton from "react-loading-skeleton";
import { HiDownload } from "react-icons/hi";

const ColorPallet = ({ data, isLoading }: any) => {
  const pallet = data?.data;

  const copyClipboard = (color: any) => {
    navigator.clipboard.writeText(color);
    toast.success(`Copied Done ${color}`);
  };

  return (
    <div>
      {data && data.data && !isLoading ? (
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <div
            className="h-40 md:h-60 lg:h-96 text-sm flex justify-center items-center shadow-inner"
            style={{ backgroundColor: pallet.primary.hex }}
          >
            <p
              className="flex justify-center items-center gap-2 cursor-pointer"
              onClick={() => copyClipboard(pallet.primary.hex)}
            >
              {pallet.primary.hex} <IoCopyOutline />
            </p>
          </div>
          <div
            className="h-40 md:h-60 lg:h-96 text-sm flex justify-center items-center shadow-inner"
            style={{ backgroundColor: pallet.secondary.hex }}
          >
            <p
              className="flex justify-center items-center gap-2 cursor-pointer"
              onClick={() => copyClipboard(pallet.secondary.hex)}
            >
              {pallet.secondary.hex} <IoCopyOutline />
            </p>
          </div>
          <div
            className="h-40 md:h-60 lg:h-96 text-sm flex justify-center items-center shadow-inner"
            style={{ backgroundColor: pallet.accent.hex }}
          >
            <p
              className="flex justify-center items-center gap-2 cursor-pointer"
              onClick={() => copyClipboard(pallet.accent.hex)}
            >
              {pallet.accent.hex} <IoCopyOutline />
            </p>
          </div>
          <div
            className="h-40 md:h-60 lg:h-96 text-sm flex justify-center items-center shadow-inner"
            style={{ backgroundColor: pallet.light.hex }}
          >
            <p
              className="flex justify-center items-center gap-2 cursor-pointer"
              onClick={() => copyClipboard(pallet.light.hex)}
            >
              {pallet.light.hex} <IoCopyOutline />
            </p>
          </div>
          <div
            className="h-40 md:h-60 lg:h-96 text-sm flex justify-center items-center shadow-inner"
            style={{ backgroundColor: pallet.dark.hex }}
          >
            <p
              className="flex justify-center items-center gap-2 cursor-pointer"
              onClick={() => copyClipboard(pallet.dark.hex)}
            >
              {pallet.dark.hex} <IoCopyOutline />
            </p>
          </div>
        </section>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      )}
      <div className="md:flex justify-between items-center mt-4 gap-2">
        <div className="flex justify-between items-center gap-2">
          <p className="flex justify-between items-center gap-1 text-sm border cursor-pointer duration-500 py-1 px-2 rounded-md">
            <FaHeart className="text-red-500" /> 00
          </p>
          <p className="flex justify-between items-center gap-1 text-sm border cursor-pointer duration-500 py-1 px-2 rounded-md">
            <HiDownload /> Image
          </p>
          <p className="flex justify-between items-center gap-1 text-sm border cursor-pointer duration-500 py-1 px-2 rounded-md">
            <FaLink /> Link
          </p>
        </div>
        <p className="text-xs font-light">
          {moment(pallet?.createdAt).startOf("hours").fromNow()}
        </p>
      </div>
    </div>
  );
};

export default ColorPallet;
