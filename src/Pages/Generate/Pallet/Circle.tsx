/* eslint-disable @typescript-eslint/no-explicit-any */
import { CirclePicker } from "react-color";

const Circle = ({ handleColor, color }: any) => {
  return (
    <CirclePicker onChange={(e: any) => handleColor(e)} color={color.rgb} />
  );
};

export default Circle;
