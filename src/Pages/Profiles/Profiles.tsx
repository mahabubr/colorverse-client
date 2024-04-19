/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import ProfileCard from "../../Components/Profile/Card/ProfileCard/ProfileCard";
import { useGetUsersQuery } from "../../Redux/Features/User/userApi";
import ReactPaginate from "react-paginate";
import { MdArrowForwardIos } from "react-icons/md";
import { GrPrevious } from "react-icons/gr";
import Skeleton from "../../Components/Shared/Skeleton/Skeleton";
import { useMeQuery } from "../../Redux/Features/Auth/AuthApi";
import UserSearchBar from "../../Components/Profile/UserSearchBar/UserSearchBar";
import ContributeSide from "../../Components/Landing/ContributeSide/ContributeSide";

const Profiles = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const perPage = 7;

  const [searchTerm, setSearchTerm] = useState("");

  const { data: userData } = useMeQuery({});

  const { data, isLoading } = useGetUsersQuery({
    page: currentPage + 1,
    limit: perPage,
    search: searchTerm,
  });

  useEffect(() => {
    if (searchTerm) {
      setCurrentPage(0);
    }
  }, [searchTerm]);

  const userFilterData = data?.data?.filter(
    (user: any) => user?.id !== userData?.data?.id
  );

  return (
    <div className="container mx-auto w-11/12 my-12">
      <div className="grid  lg:grid-cols-5 gap-10">
        <div className="lg:col-span-4">
          <div className="mb-5 flex justify-center items-center w-full">
            <UserSearchBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          </div>
          <div>
            {isLoading ? (
              <div className="grid grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 10 }).map((_: any, i: number) => (
                  <Skeleton key={i} />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 ">
                {userFilterData?.map((user: any, i: number) => (
                  <ProfileCard key={i} user={user} />
                ))}
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
        <div className="lg:col-span-1 hidden lg:block">
          <ContributeSide />
        </div>
      </div>
    </div>
  );
};

export default Profiles;
