/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@material-tailwind/react";
import { RxReset } from "react-icons/rx";
import { GiAutomaticSas } from "react-icons/gi";

const Pallet = ({
  handleAutoComplete,
  handleReset,
  primary,
  showPrimary,
  handlePrimary,
  secondary,
  showSecondary,
  handleSecondary,
  accent,
  showAccent,
  handleAccent,
  light,
  showLight,
  handleLight,
  showDark,
  dark,
  handleDark,
}: any) => {
  return (
    <div>
      <div className="flex justify-between items-center gap-4 mb-2">
        <Button
          color="deep-orange"
          size="sm"
          variant="outlined"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          className="flex justify-center items-center gap-2 text-[10px]"
          onClick={handleAutoComplete}
        >
          <GiAutomaticSas />
          Auto Complete
        </Button>
        <Button
          color="black"
          size="sm"
          variant="text"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          className="flex justify-center items-center gap-1 text-[10px]"
          onClick={handleReset}
        >
          Reset
          <RxReset />
        </Button>
      </div>
      <div
        className={`text-xs flex justify-center items-center w-full h-20 bg-gray-400 rounded-t-md  cursor-pointer duration-500 ${
          primary
            ? "scale-110 border-4 border-white rounded-md"
            : "border border-gray-400"
        } `}
        style={showPrimary ? { backgroundColor: showPrimary } : {}}
        onClick={handlePrimary}
      >
        Primary
      </div>
      <div
        className={`text-xs flex justify-center items-center w-full h-20 bg-gray-300  cursor-pointer duration-500 ${
          secondary
            ? "scale-110 border-4 border-white rounded-md"
            : "border border-gray-400"
        }`}
        style={showSecondary ? { backgroundColor: showSecondary } : {}}
        onClick={handleSecondary}
      >
        Secondary
      </div>
      <div
        className={`text-xs flex justify-center items-center w-full h-20 bg-gray-200  cursor-pointer duration-500 ${
          accent
            ? "scale-110 border-4 border-white rounded-md"
            : "border border-gray-400"
        }`}
        style={showAccent ? { backgroundColor: showAccent } : {}}
        onClick={handleAccent}
      >
        Accent
      </div>
      <div
        className={`text-xs flex justify-center items-center w-full h-20 bg-gray-100  cursor-pointer duration-500 ${
          light
            ? "scale-110 border-4 border-white rounded-md"
            : "border border-gray-400"
        }`}
        style={showLight ? { backgroundColor: showLight } : {}}
        onClick={handleLight}
      >
        Light
      </div>
      <div
        className={`text-xs flex justify-center items-center w-full h-20 bg-gray-50 rounded-b-md  cursor-pointer duration-500 ${
          dark
            ? "scale-110 border-4 border-white rounded-md"
            : "border border-gray-400"
        }`}
        style={showDark ? { backgroundColor: showDark } : {}}
        onClick={handleDark}
      >
        Dark
      </div>
    </div>
  );
};

export default Pallet;
