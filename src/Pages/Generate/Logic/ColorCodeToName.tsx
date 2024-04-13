import { GetColorName } from "hex-color-to-color-name";

const colorCodeToName = (
  showPrimary: string,
  showSecondary: string,
  showAccent: string,
  showLight: string,
  showDark: string
) => {
  const arr: string[] = [];

  arr.push(GetColorName(showPrimary));
  arr.push(GetColorName(showSecondary));
  arr.push(GetColorName(showAccent));
  arr.push(GetColorName(showLight));
  arr.push(GetColorName(showDark));

  return arr;
};
export default colorCodeToName;
