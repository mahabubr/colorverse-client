/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMeQuery } from "../../Redux/Features/Auth/AuthApi";
import ProfileDetails from "../../Components/Profile/ProfileDetails/ProfileDetails";
import ProfilePallet from "../../Components/Profile/ProfilePallet/ProfilePallet";

function ProfilePage() {
  const { data, isLoading } = useMeQuery({});

  const user = data?.data;

  const render = true;

  return (
    <main className="">
      <div>
        <ProfileDetails user={user} isLoading={isLoading} />
      </div>
      <div className="container mx-auto w-11/12">
        <ProfilePallet user={user} isLoading={isLoading} render={render} />
      </div>
    </main>
  );
}

export default ProfilePage;
