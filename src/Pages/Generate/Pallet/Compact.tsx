/* eslint-disable @typescript-eslint/no-explicit-any */
import { CompactPicker } from "react-color";

const Compact = ({ handleColor, color }: any) => {
  return (
    <CompactPicker
      onChange={(e: any) => handleColor(e)}
      color={color.rgb}
      // onChangeComplete={(color) => setCompact(color)}
    />
  );
};

export default Compact;
