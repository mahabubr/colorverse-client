/* eslint-disable @typescript-eslint/no-explicit-any */
import { HuePicker } from "react-color";

const Hue = ({ handleColor, color }: any) => {
  return <HuePicker onChange={(e: any) => handleColor(e)} color={color.rgb} />;
};

export default Hue;
