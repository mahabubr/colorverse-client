/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@material-tailwind/react";
import { FaHashtag } from "react-icons/fa6";
import { IoMdColorFill } from "react-icons/io";

const ColorTags = ({
  colorTagsList,
  isLoading,
  handleCreatePallet,
}: {
  colorTagsList: string[];
  isLoading: boolean;
  handleCreatePallet: any;
}) => {
  return (
    <div>
      <small className="text-xs font-bold border-b-2 ">Color Tags</small>
      <div className="mt-5 space-y-5 h-[20vh] overflow-y-scroll">
        <div className="flex flex-wrap gap-2 p-2">
          {colorTagsList && colorTagsList.length > 0 ? (
            colorTagsList.map((cl: string, i) => (
              <p
                key={i}
                className="text-xs inline-flex items-center font-bold leading-sm uppercase px-2 py-1 bg-orange-200 text-orange-700 rounded-full"
              >
                <FaHashtag /> {cl}
              </p>
            ))
          ) : (
            <small className="text-sm font-thin tracking-widest block">
              Generating after select color
            </small>
          )}
        </div>
      </div>
      {colorTagsList && colorTagsList.length > 0 && (
        <div className="flex justify-center">
          <Button
            onClick={handleCreatePallet}
            type="submit"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            color="deep-orange"
            className="mt-5 flex justify-center w-full gap-3"
            variant="gradient"
            loading={isLoading}
          >
            <IoMdColorFill />
            Contribute
          </Button>
        </div>
      )}
    </div>
  );
};

export default ColorTags;
