/* eslint-disable @typescript-eslint/no-explicit-any */
import { TwitterPicker } from "react-color";

const Twitter = ({ handleColor, color }: any) => {
  return (
    <TwitterPicker onChange={(e: any) => handleColor(e)} color={color.rgb} />
  );
};

export default Twitter;
