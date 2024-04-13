/* eslint-disable @typescript-eslint/no-explicit-any */
import { SketchPicker } from "react-color";

const Sketch = ({ handleColor, color }: any) => {
  return (
    <SketchPicker onChange={(e: any) => handleColor(e)} color={color.rgb} />
  );
};

export default Sketch;
