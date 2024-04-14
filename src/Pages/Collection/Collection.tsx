import Content from "../../Components/Collection/Content";
import ContributeSide from "../../Components/Landing/ContributeSide/ContributeSide";

const Collection = () => {
  return (
    <section className="container mx-auto w-11/12 my-12">
      <div className="grid  lg:grid-cols-5 gap-10">
        <div className="lg:col-span-4">
          <Content />
        </div>
        <div className="lg:col-span-1 hidden lg:block">
          <ContributeSide />
        </div>
      </div>
    </section>
  );
};

export default Collection;
