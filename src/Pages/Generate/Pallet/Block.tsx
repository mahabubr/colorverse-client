/* eslint-disable @typescript-eslint/no-explicit-any */
import { BlockPicker } from "react-color";

const Block = ({ handleColor, color }: any) => {
  return (
    <BlockPicker onChange={(e: any) => handleColor(e)} color={color.rgb} />
  );
};

export default Block;