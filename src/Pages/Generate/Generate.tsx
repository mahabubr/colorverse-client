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

interface IColors {
  hex: string;
  hsl: object;
  hsv: object;
  oldHue: number;
  rgb: object;
  source: undefined;
}

const Generate = () => {
  const [hue, setHue] = useState<any>({});
  const [block, setBlock] = useState<any>({});
  const [chrome, setChrome] = useState<any>({});
  const [circle, setCircle] = useState<any>({});
  const [compact, setCompact] = useState<any>({});
  const [twitter, setTwitter] = useState<any>({});
  const [sketch, setSketch] = useState<any>({});
  const [swatches, setSwatches] = useState<any>({});

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

  const handleHue = (e: IColors) => {
    setHue(e);

    setBlock({});
    setChrome({});
    setCircle({});
    setCompact({});
    setTwitter({});
    setSketch({});
    setSwatches({});
  };
  const handleBlock = (e: IColors) => {
    setBlock(e);

    setHue({});
    setChrome({});
    setCircle({});
    setCompact({});
    setTwitter({});
    setSketch({});
    setSwatches({});
  };
  const handleChrome = (e: IColors) => {
    setChrome(e);

    setHue({});
    setBlock({});
    setCircle({});
    setCompact({});
    setTwitter({});
    setSketch({});
    setSwatches({});
  };
  const handleCircle = (e: IColors) => {
    setCircle(e);

    setHue({});
    setBlock({});
    setChrome({});
    setCompact({});
    setTwitter({});
    setSketch({});
    setSwatches({});
  };
  const handleCompact = (e: IColors) => {
    setCompact(e);

    setHue({});
    setBlock({});
    setChrome({});
    setCircle({});
    setTwitter({});
    setSketch({});
    setSwatches({});
  };
  const handleTwitter = (e: IColors) => {
    setTwitter(e);

    setHue({});
    setBlock({});
    setChrome({});
    setCircle({});
    setCompact({});
    setSketch({});
    setSwatches({});
  };
  const handleSketch = (e: IColors) => {
    setSketch(e);

    setHue({});
    setBlock({});
    setChrome({});
    setCircle({});
    setCompact({});
    setTwitter({});
    setSwatches({});
  };
  const handleSwathes = (e: IColors) => {
    setSwatches(e);

    setHue({});
    setBlock({});
    setChrome({});
    setCircle({});
    setCompact({});
    setTwitter({});
    setSketch({});
  };

  const handleColorPallet = useCallback(() => {
    if (primary) {
      if (hue.hex && hue.hsl && hue.hsv && hue.rgb) {
        setSelectPrimary(hue);
      } else if (block.hex && block.hsl && block.hsv && block.rgb) {
        setSelectPrimary(block);
      } else if (chrome.hex && chrome.hsl && chrome.hsv && chrome.rgb) {
        setSelectPrimary(chrome);
      } else if (circle.hex && circle.hsl && circle.hsv && circle.rgb) {
        setSelectPrimary(circle);
      } else if (compact.hex && compact.hsl && compact.hsv && compact.rgb) {
        setSelectPrimary(compact);
      } else if (twitter.hex && twitter.hsl && twitter.hsv && twitter.rgb) {
        setSelectPrimary(twitter);
      } else if (sketch.hex && sketch.hsl && sketch.hsv && sketch.rgb) {
        setSelectPrimary(sketch);
      } else if (swatches.hex && swatches.hsl && swatches.hsv && swatches.rgb) {
        setSelectPrimary(swatches);
      } else {
        console.log("Reset");
      }
    } else if (secondary) {
      if (hue.hex && hue.hsl && hue.hsv && hue.rgb) {
        setSelectSecondary(hue);
      } else if (block.hex && block.hsl && block.hsv && block.rgb) {
        setSelectSecondary(block);
      } else if (chrome.hex && chrome.hsl && chrome.hsv && chrome.rgb) {
        setSelectSecondary(chrome);
      } else if (circle.hex && circle.hsl && circle.hsv && circle.rgb) {
        setSelectSecondary(circle);
      } else if (compact.hex && compact.hsl && compact.hsv && compact.rgb) {
        setSelectSecondary(compact);
      } else if (twitter.hex && twitter.hsl && twitter.hsv && twitter.rgb) {
        setSelectSecondary(twitter);
      } else if (sketch.hex && sketch.hsl && sketch.hsv && sketch.rgb) {
        setSelectSecondary(sketch);
      } else if (swatches.hex && swatches.hsl && swatches.hsv && swatches.rgb) {
        setSelectSecondary(swatches);
      } else {
        console.log("Reset");
      }
    } else if (accent) {
      if (hue.hex && hue.hsl && hue.hsv && hue.rgb) {
        setSelectAccent(hue);
      } else if (block.hex && block.hsl && block.hsv && block.rgb) {
        setSelectAccent(block);
      } else if (chrome.hex && chrome.hsl && chrome.hsv && chrome.rgb) {
        setSelectAccent(chrome);
      } else if (circle.hex && circle.hsl && circle.hsv && circle.rgb) {
        setSelectAccent(circle);
      } else if (compact.hex && compact.hsl && compact.hsv && compact.rgb) {
        setSelectAccent(compact);
      } else if (twitter.hex && twitter.hsl && twitter.hsv && twitter.rgb) {
        setSelectAccent(twitter);
      } else if (sketch.hex && sketch.hsl && sketch.hsv && sketch.rgb) {
        setSelectAccent(sketch);
      } else if (swatches.hex && swatches.hsl && swatches.hsv && swatches.rgb) {
        setSelectAccent(swatches);
      } else {
        console.log("Reset");
      }
    } else if (light) {
      if (hue.hex && hue.hsl && hue.hsv && hue.rgb) {
        setSelectLight(hue);
      } else if (block.hex && block.hsl && block.hsv && block.rgb) {
        setSelectLight(block);
      } else if (chrome.hex && chrome.hsl && chrome.hsv && chrome.rgb) {
        setSelectLight(chrome);
      } else if (circle.hex && circle.hsl && circle.hsv && circle.rgb) {
        setSelectLight(circle);
      } else if (compact.hex && compact.hsl && compact.hsv && compact.rgb) {
        setSelectLight(compact);
      } else if (twitter.hex && twitter.hsl && twitter.hsv && twitter.rgb) {
        setSelectLight(twitter);
      } else if (sketch.hex && sketch.hsl && sketch.hsv && sketch.rgb) {
        setSelectLight(sketch);
      } else if (swatches.hex && swatches.hsl && swatches.hsv && swatches.rgb) {
        setSelectLight(swatches);
      } else {
        console.log("Reset");
      }
    } else if (dark) {
      if (hue.hex && hue.hsl && hue.hsv && hue.rgb) {
        setSelectDark(hue);
      } else if (block.hex && block.hsl && block.hsv && block.rgb) {
        setSelectDark(block);
      } else if (chrome.hex && chrome.hsl && chrome.hsv && chrome.rgb) {
        setSelectDark(chrome);
      } else if (circle.hex && circle.hsl && circle.hsv && circle.rgb) {
        setSelectDark(circle);
      } else if (compact.hex && compact.hsl && compact.hsv && compact.rgb) {
        setSelectDark(compact);
      } else if (twitter.hex && twitter.hsl && twitter.hsv && twitter.rgb) {
        setSelectDark(twitter);
      } else if (sketch.hex && sketch.hsl && sketch.hsv && sketch.rgb) {
        setSelectDark(sketch);
      } else if (swatches.hex && swatches.hsl && swatches.hsv && swatches.rgb) {
        setSelectDark(swatches);
      } else {
        console.log("Reset");
      }
    } else {
      console.log("Reset");
    }
  }, [
    accent,
    block,
    chrome,
    circle,
    compact,
    dark,
    hue,
    light,
    primary,
    secondary,
    sketch,
    swatches,
    twitter,
  ]);

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
      hsl: {},
      hsv: {},
      oldHue: 0,
      rgb: {},
      source: undefined,
    });
    setSelectSecondary({
      hex: auto.secondary,
      hsl: {},
      hsv: {},
      oldHue: 0,
      rgb: {},
      source: undefined,
    });
    setSelectAccent({
      hex: auto.accent,
      hsl: {},
      hsv: {},
      oldHue: 0,
      rgb: {},
      source: undefined,
    });
    setSelectLight({
      hex: auto.light,
      hsl: {},
      hsv: {},
      oldHue: 0,
      rgb: {},
      source: undefined,
    });
    setSelectDark({
      hex: auto.dark,
      hsl: {},
      hsv: {},
      oldHue: 0,
      rgb: {},
      source: undefined,
    });
  };

  const showPrimary = selectPrimary.hex;
  const showSecondary = selectSecondary.hex;
  const showAccent = selectAccent.hex;
  const showLight = selectLight.hex;
  const showDark = selectDark.hex;

  console.log({ showPrimary, showSecondary, showAccent, showLight, showDark });

  return (
    <section className="container mx-auto w-11/12 my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-20">
        <div>
          <HuePicker
            onChange={(e: any) => handleHue(e)}
            color={hue.rgb}
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
            onChange={(e: any) => handleChrome(e)}
            color={chrome.rgb}
            // onChangeComplete={(color) => setChrome(color)}
          />
        </div>
        <div>
          <BlockPicker
            onChange={(e: any) => handleBlock(e)}
            color={block.rgb}
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
        <div>6</div>
        <div>
          <CirclePicker
            onChange={(e: any) => handleCircle(e)}
            color={circle.rgb}
            // onChangeComplete={(color) => setCircle(color)}
          />
        </div>
        <div>8</div>
        <div>
          <CompactPicker
            onChange={(e: any) => handleCompact(e)}
            color={compact.rgb}
            // onChangeComplete={(color) => setCompact(color)}
          />
        </div>
        <div>
          <TwitterPicker
            onChange={(e: any) => handleTwitter(e)}
            color={twitter.rgb}
            // onChangeComplete={(color) => setTwitter(color)}
          />
        </div>
        <div>
          <SketchPicker
            onChange={(e: any) => handleSketch(e)}
            color={sketch.rgb}
            // onChangeComplete={(color) => setSketch(color)}
          />
        </div>
        <div>
          <SwatchesPicker
            onChange={(e: any) => handleSwathes(e)}
            color={swatches.rgb}
            // onChangeComplete={(color) => setSwatches(color)}
          />
        </div>
      </div>
    </section>
  );
};

export default Generate;
