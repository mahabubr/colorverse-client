/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChromePicker } from "react-color";

const Chrome = ({ handleColor, color }: any) => {
  return (
    <ChromePicker onChange={(e: any) => handleColor(e)} color={color.rgb} />
  );
};

export default Chrome;
