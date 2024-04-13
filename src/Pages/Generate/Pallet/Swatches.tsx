/* eslint-disable @typescript-eslint/no-explicit-any */
import { SwatchesPicker } from "react-color";

const Swatches = ({ handleColor, color }: any) => {
  return (
    <SwatchesPicker onChange={(e: any) => handleColor(e)} color={color.rgb} />
  );
};

export default Swatches;