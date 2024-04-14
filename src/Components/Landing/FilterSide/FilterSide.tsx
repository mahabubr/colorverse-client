/* eslint-disable @typescript-eslint/no-explicit-any */
import Skeleton from "react-loading-skeleton";
import { useGetPalletFilterOptionsQuery } from "../../../Redux/Features/PalletFilter/palletFilterApi";
import { Link } from "react-router-dom";

const FilterSide = ({ setFilterInfo }: any) => {
  const { data, isLoading } = useGetPalletFilterOptionsQuery({});

  return (
    <div>
      <div className="">
        <Link to="/">
          <h2
            onClick={() => setFilterInfo("")}
            className="text-sm tracking-widest border px-4 py-2 rounded-md shadow-inner cursor-pointer custom-shadow"
          >
            New
          </h2>
        </Link>
        <Link to="/collection">
          <h2 className="text-sm tracking-widest border px-4 py-2 rounded-md shadow-inner cursor-pointer custom-shadow mt-2">
            Collection
          </h2>
        </Link>
      </div>

      <div className="mt-5">
        {isLoading ? (
          <>
            {Array.from({ length: 20 }).map((_: any, i: number) => (
              <Skeleton key={i} />
            ))}
          </>
        ) : (
          <div className="h-screen overflow-y-scroll space-y-2">
            {data &&
              data?.data &&
              data?.data?.length > 0 &&
              data?.data?.map((opt: string, i: number) => (
                <div onClick={() => setFilterInfo(opt)} key={i}>
                  <p className="text-xs font-light cursor-pointer hover:bg-orange-50 py-1 px-2 rounded-md duration-500">
                    {opt}
                  </p>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSide;
