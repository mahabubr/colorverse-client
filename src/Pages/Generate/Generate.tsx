/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@material-tailwind/react";
import { useCallback, useEffect, useState } from "react";
import {
  BlockPicker,
  ChromePicker,
  CirclePicker,
  CompactPicker,
  HuePicker,
  SketchPicker,
  SwatchesPicker,
  TwitterPicker,
} from "react-color";
import { RxReset } from "react-icons/rx";
import { GiAutomaticSas } from "react-icons/gi";
import generateColorVariations from "../../utils/generateColorVariatons";
import tinycolor from "tinycolor2";
import { IoCopyOutline } from "react-icons/io5";

interface IColors {
  hex: string;
  hsl: object;
  hsv: object;
  oldHue: number;
  rgb: object;
  source: undefined;
}

const Generate = () => {
  const [color, setColor] = useState<any>({});

  const [primary, setPrimary] = useState<boolean>(false);
  const [secondary, setSecondary] = useState<boolean>(false);
  const [accent, setAccent] = useState<boolean>(false);
  const [light, setLight] = useState<boolean>(false);
  const [dark, setDark] = useState<boolean>(false);

  const [selectPrimary, setSelectPrimary] = useState<any>({});
  const [selectSecondary, setSelectSecondary] = useState<any>({});
  const [selectAccent, setSelectAccent] = useState<any>({});
  const [selectLight, setSelectLight] = useState<any>({});
  const [selectDark, setSelectDark] = useState<any>({});

  const handlePrimary = () => {
    setPrimary(!primary);
    setSecondary(false);
    setAccent(false);
    setLight(false);
    setDark(false);
  };
  const handleSecondary = () => {
    setPrimary(false);
    setSecondary(!secondary);
    setAccent(false);
    setLight(false);
    setDark(false);
  };
  const handleAccent = () => {
    setPrimary(false);
    setSecondary(false);
    setAccent(!accent);
    setLight(false);
    setDark(false);
  };
  const handleLight = () => {
    setPrimary(false);
    setSecondary(false);
    setAccent(false);
    setLight(!light);
    setDark(false);
  };
  const handleDark = () => {
    setPrimary(false);
    setSecondary(false);
    setAccent(false);
    setLight(false);
    setDark(!dark);
  };

  const handleColor = (e: IColors) => {
    setColor(e);
  };

  const handleColorPallet = useCallback(() => {
    if (primary) {
      if (color.hex && color.hsl && color.hsv && color.rgb) {
        setSelectPrimary(color);
      } else {
        console.log("Reset");
      }
    } else if (secondary) {
      if (color.hex && color.hsl && color.hsv && color.rgb) {
        setSelectSecondary(color);
      } else {
        console.log("Reset");
      }
    } else if (accent) {
      if (color.hex && color.hsl && color.hsv && color.rgb) {
        setSelectAccent(color);
      } else {
        console.log("Reset");
      }
    } else if (light) {
      if (color.hex && color.hsl && color.hsv && color.rgb) {
        setSelectLight(color);
      } else {
        console.log("Reset");
      }
    } else if (dark) {
      if (color.hex && color.hsl && color.hsv && color.rgb) {
        setSelectDark(color);
      } else {
        console.log("Reset");
      }
    } else {
      console.log("Reset");
    }
  }, [accent, color, dark, light, primary, secondary]);

  useEffect(() => {
    if (!primary) {
      setColor({});
    } else if (!secondary) {
      setColor({});
    } else if (!accent) {
      setColor({});
    } else if (!light) {
      setColor({});
    } else if (!dark) {
      setColor({});
    }
  }, [primary, secondary, accent, dark, light]);

  useEffect(() => {
    handleColorPallet();
  }, [handleColorPallet]);

  const handleReset = () => {
    setSelectPrimary({});
    setSelectSecondary({});
    setSelectAccent({});
    setSelectLight({});
    setSelectDark({});
  };

  const handleAutoComplete = () => {
    const auto = generateColorVariations();

    setSelectPrimary({
      hex: auto.primary,
      hsl: tinycolor(auto.primary).toHsl(),
      hsv: tinycolor(auto.primary).toHsv(),
      oldHue: 0,
      rgb: tinycolor(auto.primary).toRgb(),
      source: "hex",
    });
    setSelectSecondary({
      hex: auto.secondary,
      hsl: tinycolor(auto.secondary).toHsl(),
      hsv: tinycolor(auto.secondary).toHsv(),
      oldHue: 0,
      rgb: tinycolor(auto.secondary).toRgb(),
      source: "hex",
    });
    setSelectAccent({
      hex: auto.accent,
      hsl: tinycolor(auto.accent).toHsl(),
      hsv: tinycolor(auto.accent).toHsv(),
      oldHue: 0,
      rgb: tinycolor(auto.accent).toRgb(),
      source: "hex",
    });
    setSelectLight({
      hex: auto.light,
      hsl: tinycolor(auto.light).toHsl(),
      hsv: tinycolor(auto.light).toHsv(),
      oldHue: 0,
      rgb: tinycolor(auto.light).toRgb(),
      source: "hex",
    });
    setSelectDark({
      hex: auto.dark,
      hsl: tinycolor(auto.dark).toHsl(),
      hsv: tinycolor(auto.dark).toHsv(),
      oldHue: 0,
      rgb: tinycolor(auto.dark).toRgb(),
      source: "hex",
    });
  };

  console.log(color);

  const showPrimary = selectPrimary.hex;
  const showSecondary = selectSecondary.hex;
  const showAccent = selectAccent.hex;
  const showLight = selectLight.hex;
  const showDark = selectDark.hex;

  // console.log({ showPrimary, showSecondary, showAccent, showLight, showDark });
  // console.log({
  //   selectPrimary,
  //   selectSecondary,
  //   selectAccent,
  //   selectLight,
  //   selectDark,
  // });

  // hex: "#37d67a"
  // hsl : {h: 145.28301886792454, s: 0.6597510373443984, l: 0.5274509803921569, a: 1}
  // hsv : {h: 145.28301886792454, s: 0.7429906542056075, v: 0.8392156862745098, a: 1}
  // oldHue : 250
  // rgb :  {r: 55, g: 214, b: 122, a: 1}
  // source: "hex"

  return (
    <section className="container mx-auto w-11/12 my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-20">
        <div>
          <HuePicker
            onChange={(e: any) => handleColor(e)}
            color={color.rgb}
            // onChangeComplete={(color) => setHue(color)}
          />
        </div>
        <div className="text-center">
          <h2 className="text-xl font-bold bg-gradient-to-r from-orange-700 to-orange-500 text-transparent bg-clip-text">
            Discover Our Latest Color Scheme
          </h2>
          <p className="text-sm text-gray-500">
            Unveil and enrich Color Hunt's diverse selection of colors
          </p>
        </div>
        <div>
          <ChromePicker
            onChange={(e: any) => handleColor(e)}
            color={color.rgb}
            // onChangeComplete={(color) => setChrome(color)}
          />
        </div>
        <div>
          <BlockPicker
            onChange={(e: any) => handleColor(e)}
            color={color.rgb}
            // onChangeComplete={(color) => setBlock(color)}
          />
        </div>
        <div className="w-full h-full">
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
        </div>
        <div className="">
          <small className="text-xs font-bold border-b-2 ">
            Selected colors
          </small>
          <div className="mt-5 space-y-5 h-[50vh] overflow-scroll">
            {selectPrimary.hex ? (
              <div>
                <h2 className="text-sm font-thin tracking-widest flex gap-2 items-center">
                  Primary Code: <IoCopyOutline className="cursor-pointer" />
                </h2>
                <p className="text-[10px]">
                  <b>hex:</b> {selectPrimary.hex}
                </p>
                <p className="text-[10px]">
                  <b>hsl:</b> {selectPrimary.hsl.h} {selectPrimary.hsl.s}{" "}
                  {selectPrimary.hsl.l} {selectPrimary.hsv.a}
                </p>
                <p className="text-[10px]">
                  <b>hsv:</b> {selectPrimary.hsv.h} {selectPrimary.hsv.s}{" "}
                  {selectPrimary.hsv.v} {selectPrimary.hsv.a}
                </p>
                <p className="text-[10px]">
                  <b>oldHue:</b> {selectPrimary.oldHue}
                </p>
                <p className="text-[10px]">
                  <b>source:</b> {selectPrimary.source}
                </p>
              </div>
            ) : (
              <small className="text-sm font-thin tracking-widest block">
                Please Select Primary Color
              </small>
            )}
            {selectSecondary.hex ? (
              <div>
                <h2 className="text-sm font-thin tracking-widest flex gap-2 items-center">
                  Secondary Code: <IoCopyOutline className="cursor-pointer" />
                </h2>
                <p className="text-[10px]">
                  <b>hex:</b> {selectSecondary.hex}
                </p>
                <p className="text-[10px]">
                  <b>hsl:</b> {selectSecondary.hsl.h} {selectSecondary.hsl.s}{" "}
                  {selectSecondary.hsl.l} {selectSecondary.hsv.a}
                </p>
                <p className="text-[10px]">
                  <b>hsv:</b> {selectSecondary.hsv.h} {selectSecondary.hsv.s}{" "}
                  {selectSecondary.hsv.v} {selectSecondary.hsv.a}
                </p>
                <p className="text-[10px]">
                  <b>oldHue:</b> {selectSecondary.oldHue}
                </p>
                <p className="text-[10px]">
                  <b>source:</b> {selectSecondary.source}
                </p>
              </div>
            ) : (
              <small className="text-sm font-thin tracking-widest block">
                Please Select Secondary Color
              </small>
            )}
            {selectAccent.hex ? (
              <div>
                <h2 className="text-sm font-thin tracking-widest flex gap-2 items-center">
                  Accent Code: <IoCopyOutline className="cursor-pointer" />
                </h2>
                <p className="text-[10px]">
                  <b>hex:</b> {selectAccent.hex}
                </p>
                <p className="text-[10px]">
                  <b>hsl:</b> {selectAccent.hsl.h} {selectAccent.hsl.s}{" "}
                  {selectAccent.hsl.l} {selectAccent.hsv.a}
                </p>
                <p className="text-[10px]">
                  <b>hsv:</b> {selectAccent.hsv.h} {selectAccent.hsv.s}{" "}
                  {selectAccent.hsv.v} {selectAccent.hsv.a}
                </p>
                <p className="text-[10px]">
                  <b>oldHue:</b> {selectAccent.oldHue}
                </p>
                <p className="text-[10px]">
                  <b>source:</b> {selectAccent.source}
                </p>
              </div>
            ) : (
              <small className="text-sm font-thin tracking-widest block">
                Please Select Accent Color
              </small>
            )}
            {selectLight.hex ? (
              <div>
                <h2 className="text-sm font-thin tracking-widest flex gap-2 items-center">
                  Light Code: <IoCopyOutline className="cursor-pointer" />
                </h2>
                <p className="text-[10px]">
                  <b>hex:</b> {selectLight.hex}
                </p>
                <p className="text-[10px]">
                  <b>hsl:</b> {selectLight.hsl.h} {selectLight.hsl.s}{" "}
                  {selectLight.hsl.l} {selectLight.hsv.a}
                </p>
                <p className="text-[10px]">
                  <b>hsv:</b> {selectLight.hsv.h} {selectLight.hsv.s}{" "}
                  {selectLight.hsv.v} {selectLight.hsv.a}
                </p>
                <p className="text-[10px]">
                  <b>oldHue:</b> {selectLight.oldHue}
                </p>
                <p className="text-[10px]">
                  <b>source:</b> {selectLight.source}
                </p>
              </div>
            ) : (
              <small className="text-sm font-thin tracking-widest block">
                Please Select Light Color
              </small>
            )}
            {selectDark.hex ? (
              <div>
                <h2 className="text-sm font-thin tracking-widest flex gap-2 items-center">
                  Dark Code: <IoCopyOutline className="cursor-pointer" />
                </h2>
                <p className="text-[10px]">
                  <b>hex:</b> {selectDark.hex}
                </p>
                <p className="text-[10px]">
                  <b>hsl:</b> {selectDark.hsl.h} {selectDark.hsl.s}{" "}
                  {selectDark.hsl.l} {selectDark.hsv.a}
                </p>
                <p className="text-[10px]">
                  <b>hsv:</b> {selectDark.hsv.h} {selectDark.hsv.s}{" "}
                  {selectDark.hsv.v} {selectDark.hsv.a}
                </p>
                <p className="text-[10px]">
                  <b>oldHue:</b> {selectDark.oldHue}
                </p>
                <p className="text-[10px]">
                  <b>source:</b> {selectDark.source}
                </p>
              </div>
            ) : (
              <small className="text-sm font-thin tracking-widest block">
                Please Select Dark Color
              </small>
            )}
          </div>
        </div>
        <div>
          <CirclePicker
            onChange={(e: any) => handleColor(e)}
            color={color.rgb}
            // onChangeComplete={(color) => setCircle(color)}
          />
        </div>
        <div>8</div>
        <div>
          <CompactPicker
            onChange={(e: any) => handleColor(e)}
            color={color.rgb}
            // onChangeComplete={(color) => setCompact(color)}
          />
        </div>
        <div>
          <TwitterPicker
            onChange={(e: any) => handleColor(e)}
            color={color.rgb}
            // onChangeComplete={(color) => setTwitter(color)}
          />
        </div>
        <div>
          <SketchPicker
            onChange={(e: any) => handleColor(e)}
            color={color.rgb}
            // onChangeComplete={(color) => setSketch(color)}
          />
        </div>
        <div>
          <SwatchesPicker
            onChange={(e: any) => handleColor(e)}
            color={color.rgb}
            // onChangeComplete={(color) => setSwatches(color)}
          />
        </div>
      </div>
    </section>
  );
};

export default Generate;
