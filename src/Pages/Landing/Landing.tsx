import Content from "../../Components/Landing/Content/Content";
import ContributeSide from "../../Components/Landing/ContributeSide/ContributeSide";
import FilterSide from "../../Components/Landing/FilterSide/FilterSide";

const Landing = () => {
  return (
    <section className="container mx-auto w-11/12 my-12">
      <div className="grid grid-cols-5 gap-10">
        <div className="col-span-1">
          <FilterSide />
        </div>
        <div className="col-span-3">
          <Content />
        </div>
        <div className="col-span-1">
          <ContributeSide />
        </div>
      </div>
    </section>
  );
};

export default Landing;
