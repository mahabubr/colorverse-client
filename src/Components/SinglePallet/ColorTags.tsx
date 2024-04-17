/* eslint-disable @typescript-eslint/no-explicit-any */

import { FaHashtag } from "react-icons/fa";

const ColorTags = ({ data }: any) => {
  const pallet = data?.data;

  return (
    <div className="lg:w-7/12 mx-auto ">
      <h2 className="text-xs text-center font-bold border-b">ColorTags</h2>
      <div className="flex flex-wrap gap-2 p-2 justify-center">
        {pallet?.tags &&
          pallet?.tags.length > 0 &&
          pallet?.tags?.map((tag: string, i: number) => (
            <p
              key={i}
              className="text-xs inline-flex items-center font-bold leading-sm uppercase px-2 py-1 bg-orange-200 text-orange-700 rounded-full"
            >
              <FaHashtag /> {tag}
            </p>
          ))}
      </div>
    </div>
  );
};

export default ColorTags;
