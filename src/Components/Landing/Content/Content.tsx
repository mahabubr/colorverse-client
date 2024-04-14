/* eslint-disable @typescript-eslint/no-explicit-any */
import toast from "react-hot-toast";
import { useGetPalletQuery } from "../../../Redux/Features/Pallet/palletApi";
import Skeleton from "../../Shared/Skeleton/Skeleton";
import { IoCopyOutline } from "react-icons/io5";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { GrPrevious } from "react-icons/gr";
import moment from "moment";
import { FaEye, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Content = ({ filterInfo }: { filterInfo: string }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const perPage = 9;

  const { data, isLoading } = useGetPalletQuery({
    page: currentPage + 1,
    limit: perPage,
    search: filterInfo,
  });

  const copyClipboard = (color: any) => {
    navigator.clipboard.writeText(color);
    toast.success(`Copied Done ${color}`);
  };

  const palletData = data?.data;

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 place-items-center gap-4 md:gap-10">
        {palletData && palletData.length && !isLoading ? (
          palletData.map((pallet: any) => (
            <div key={pallet.id} className="w-full">
              <div
                className="h-12 flex justify-center items-center cursor-pointer text-[10px] shadow-inner rounded-t-md"
                style={{ backgroundColor: pallet.primary.hex }}
              >
                <p
                  className="flex justify-center items-center gap-2"
                  onClick={() => copyClipboard(pallet.primary.hex)}
                >
                  {pallet.primary.hex} <IoCopyOutline />
                </p>
              </div>
              <div
                className="h-12 flex justify-center items-center cursor-pointer text-[10px] shadow-inner"
                style={{ backgroundColor: pallet.secondary.hex }}
              >
                <p
                  className="flex justify-center items-center gap-2"
                  onClick={() => copyClipboard(pallet.secondary.hex)}
                >
                  {pallet.secondary.hex} <IoCopyOutline />
                </p>
              </div>
              <div
                className="h-12 flex justify-center items-center cursor-pointer text-[10px] shadow-inner"
                style={{ backgroundColor: pallet.accent.hex }}
              >
                <p
                  className="flex justify-center items-center gap-2"
                  onClick={() => copyClipboard(pallet.accent.hex)}
                >
                  {pallet.accent.hex} <IoCopyOutline />
                </p>
              </div>
              <div
                className="h-12 flex justify-center items-center cursor-pointer text-[10px] shadow-inner"
                style={{ backgroundColor: pallet.light.hex }}
              >
                <p
                  className="flex justify-center items-center gap-2"
                  onClick={() => copyClipboard(pallet.light.hex)}
                >
                  {pallet.light.hex} <IoCopyOutline />
                </p>
              </div>
              <div
                className="h-12 flex justify-center items-center cursor-pointer text-[10px] shadow-inner rounded-b-md"
                style={{ backgroundColor: pallet.dark.hex }}
              >
                <p
                  className="flex justify-center items-center gap-2"
                  onClick={() => copyClipboard(pallet.dark.hex)}
                >
                  {pallet.dark.hex} <IoCopyOutline />
                </p>
              </div>
              <div className="md:flex justify-between items-center mt-2 gap-2">
                <div className="flex justify-between items-center gap-2">
                  <p className="flex justify-between items-center gap-1 text-sm border cursor-pointer duration-500 py-1 px-2 rounded-md ">
                    <FaHeart className="text-red-200" /> Collect
                  </p>
                  <Link
                    to={`/pallet/${pallet.id}`}
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

      <div className="pagination-container">
        {data && (
          <ReactPaginate
            pageCount={Math.ceil(data.meta.total / perPage)}
            pageRangeDisplayed={5}
            marginPagesDisplayed={2}
            onPageChange={({ selected }) => setCurrentPage(selected)}
            containerClassName={"pagination"}
            activeClassName={"active"}
            nextLabel={<MdArrowForwardIos />}
            previousLabel={<GrPrevious />}
          />
        )}
      </div>
    </div>
  );
};

export default Content;