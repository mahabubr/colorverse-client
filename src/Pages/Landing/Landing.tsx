import { useState } from "react";
import Content from "../../Components/Landing/Content/Content";
import ContributeSide from "../../Components/Landing/ContributeSide/ContributeSide";
import FilterSide from "../../Components/Landing/FilterSide/FilterSide";

const Landing = () => {
  const [filterInfo, setFilterInfo] = useState("");

  return (
    <section className="container mx-auto w-11/12 my-12">
      <div className="grid  lg:grid-cols-5 gap-10">
        <div className="lg:col-span-1 hidden lg:block">
          <FilterSide setFilterInfo={setFilterInfo} />
        </div>
        <div className="lg:col-span-3">
          <Content filterInfo={filterInfo} />
        </div>
        <div className="lg:col-span-1 hidden lg:block">
          <ContributeSide />
        </div>
      </div>
    </section>
  );
};

export default Landing;
