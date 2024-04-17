/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useMeQuery } from "../../../Redux/Features/Auth/AuthApi";
import { useUpdateUserMutation } from "../../../Redux/Features/User/userApi";
import { toast } from "react-toastify";

const ProfileEdit = () => {
  const { data: userData } = useMeQuery({});
  const [updateUser, { isLoading }] = useUpdateUserMutation();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [bio, setBio] = useState("");

  useEffect(() => {
    setFirstName(userData?.data?.name?.split(" ")[0]);
    setLastName(userData?.data?.name?.split(" ")[1]);
    setEmail(userData?.data?.email);
    setPassword(userData?.data?.password);
    setBio(userData?.data?.bio);
  }, [userData]);

  // Function to handle form submission
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const payload = {
      name: `${firstName} ${lastName}`,
      bio: bio,
    };

    updateUser({ id: userData?.data?.id, payload }).then((res: any) => {
      if (res?.data?.status === 200) {
        toast.success(res?.data?.message);
      } else {
        toast.success(res?.data?.data);
      }
    });
  };

  return (
    <div className="w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row ">
      <main className="w-full py-1 md:w-2/3 lg:w-3/4">
        <form onSubmit={handleSubmit} className="p-2 md:p-4">
          <div className="w-full px-6 pb-8 sm:max-w-xl sm:rounded-md">
            <h2 className="text-sm border-b inline-flex font-bold tracking-wider">
              Edit Profile
            </h2>
            <div className="grid max-w-2xl mx-auto">
              <div className="items-center mt-8 sm:mt-14">
                <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                  <div className="w-full">
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-xs font-medium"
                    >
                      Your first name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      value={firstName}
                      onChange={(e: any) => setFirstName(e.target.value)}
                      className="border border-orange-700  text-xs rounded-md focus:outline-none block w-full p-2.5"
                      placeholder="Your first name"
                    />
                  </div>

                  <div className="w-full">
                    <label
                      htmlFor="last_name"
                      className="block mb-2 text-xs font-medium"
                    >
                      Your last name
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      value={lastName}
                      onChange={(e: any) => setLastName(e.target.value)}
                      className="border border-orange-700  text-xs rounded-md focus:outline-none block w-full p-2.5"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div className="mb-2 sm:mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-xs font-medium"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e: any) => setEmail(e.target.value)}
                    className="border border-orange-700  text-xs rounded-md focus:outline-none block w-full p-2.5 cursor-not-allowed"
                    placeholder="your.email@mail.com"
                    disabled
                  />
                </div>

                <div className="mb-2 sm:mb-6">
                  <label
                    htmlFor="profession"
                    className="block mb-2 text-xs font-medium"
                  >
                    Password{" "}
                    <span className="text-xs font-light">
                      (it was encrypted for everyone)
                    </span>
                  </label>
                  <input
                    type="text"
                    id="profession"
                    value={password}
                    onChange={(e: any) => setPassword(e.target.value)}
                    className="border border-orange-700  text-xs rounded-md focus:outline-none block w-full p-2.5 cursor-not-allowed"
                    placeholder="your passowrd"
                    disabled
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-xs font-medium"
                  >
                    Bio
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={bio}
                    onChange={(e: any) => setBio(e.target.value)}
                    className="block p-2.5 w-full text-xs  rounded-md border border-orange-700 focus:outline-none"
                    placeholder="Write your bio here..."
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <Button
                    type="submit"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    color="deep-orange"
                    className="flex justify-center w-full lg:w-auto "
                    variant="gradient"
                    loading={isLoading}
                  >
                    Update Information
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default ProfileEdit;
