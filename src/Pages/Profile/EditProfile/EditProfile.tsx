import ContributeSide from "../../../Components/Landing/ContributeSide/ContributeSide";
import ProfileEdit from "../../../Components/Profile/ProfileEdit/ProfileEdit";

const EditProfile = () => {
  return (
    <div className="container mx-auto w-11/12 my-12">
      <div className="grid  lg:grid-cols-5 gap-10">
        <div className="lg:col-span-4">
          <ProfileEdit />
        </div>
        <div className="lg:col-span-1 hidden lg:block">
          <ContributeSide />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
