/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import { useGetSinglePalletQuery } from "../../Redux/Features/Pallet/palletApi";
import ColorPallet from "../../Components/SinglePallet/ColorPallet";
import ColorCode from "../../Components/SinglePallet/ColorCode";
import ColorTags from "../../Components/SinglePallet/ColorTags";
import ContributeProfile from "../../Components/SinglePallet/ContributeProfile";

const SinglePallet = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetSinglePalletQuery({ id });

  return (
    <div className="container mx-auto w-11/12 mb-12">
      <div>
        <ColorPallet data={data} isLoading={isLoading} />
      </div>
      <div className="mt-10">
        <ColorCode data={data} />
      </div>
      <div className="mt-10">
        <ColorTags data={data} />
      </div>
      <div className="mt-10">
        <ContributeProfile data={data} />
      </div>
    </div>
  );
};

export default SinglePallet;
