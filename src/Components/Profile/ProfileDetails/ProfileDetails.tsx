/* eslint-disable @typescript-eslint/no-explicit-any */
import { GrSettingsOption } from "react-icons/gr";
import { TbDetails } from "react-icons/tb";
import Skeleton from "react-loading-skeleton";

const ProfileDetails = ({ isLoading, user }: any) => {
  return (
    <div>
      {isLoading ? (
        <div className="grid grid-cols-2 lg:grid-cols-5">
          {Array.from({ length: 10 }).map((_: any, i: number) => (
            <Skeleton key={i} />
          ))}
        </div>
      ) : (
        <>
          <section className="relative block h-[300px]">
            <div
              className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1558470598-a5dda9640f68?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
              }}
            >
              <span
                id="blackOverlay"
                className="w-full h-full absolute opacity-50 bg-black"
              ></span>
            </div>
            <div
              className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-[70px]"
              style={{ transform: "translateZ(0px)" }}
            >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="text-gray-200 fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>
          </section>
          <section className="relative py-16 bg-blueGray-200">
            <div className="container mx-auto px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-md rounded-lg -mt-64">
                <div className="px-6">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                      <div className="relative">
                        <div className="shadow-md rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 w-[150px] h-[150px] bg-orange-700 flex justify-center items-center font-bold text-white">
                          <div className="text-center">
                            <p className="text-xs">Contribution</p>
                            <p className="text-3xl">{user?.contribute}*</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-28 mb-10">
                    <h3 className="text-4xl font-semibold leading-normal text-gray-700 mb-2">
                      {user?.name}
                    </h3>
                    <div className="text-sm leading-normal mt-0 mb-2 text-gray-400  uppercase">
                      {user?.email}
                    </div>
                    <div className="mb-2 text-orange-700 mt-10">
                      <p className="flex justify-center items-center gap-1">
                        <GrSettingsOption />
                        {user?.role}
                      </p>
                    </div>
                    <div className="mb-2 text-gray-600 mt-2 text-sm">
                      <p className="flex justify-center items-center gap-1">
                        <TbDetails />
                        {user?.bio}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default ProfileDetails;
