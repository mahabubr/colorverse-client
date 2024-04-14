import { useParams } from "react-router-dom";
import { useGetSingleUserQuery } from "../../Redux/Features/User/userApi";
import ProfileDetails from "../../Components/Profile/ProfileDetails/ProfileDetails";
import ProfilePallet from "../../Components/Profile/ProfilePallet/ProfilePallet";

const UserProfile = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetSingleUserQuery({ id });

  const user = data?.data;

  return (
    <main>
      <div>
        <ProfileDetails user={user} isLoading={isLoading} />
      </div>
      <div className="container mx-auto w-11/12">
        <ProfilePallet user={user} isLoading={isLoading} />
      </div>
    </main>
  );
};

export default UserProfile;
