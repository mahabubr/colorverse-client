import RecentUsers from "./Parts/RecentUsers";
import TopContributor from "./Parts/TopContributor";

const ContributeSide = () => {
  return (
    <div className="space-y-5">
      <div>
        <TopContributor />
      </div>
      <div>
        <RecentUsers />
      </div>
    </div>
  );
};

export default ContributeSide;
