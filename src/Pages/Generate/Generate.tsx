/* eslint-disable @typescript-eslint/no-explicit-any */
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

  const [selectPrimary, setSelectPrimary] = useState({});
  const [selectSecondary, setSelectSecondary] = useState({});
  const [selectAccent, setSelectAccent] = useState({});
  const [selectLight, setSelectLight] = useState({});
  const [selectDark, setSelectDark] = useState({});

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

  console.log({
    selectPrimary,
    selectSecondary,
    selectAccent,
    selectLight,
    selectDark,
  });

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
        <div>3</div>
        <div>
          <BlockPicker
            onChange={(e: any) => handleBlock(e)}
            color={block.rgb}
            // onChangeComplete={(color) => setBlock(color)}
          />
        </div>
        <div className="w-full h-full">
          <div
            className={`text-xs flex justify-center items-center w-full h-20 bg-gray-400 rounded-t-md border border-gray-600 cursor-pointer duration-500 ${
              primary ? "animate-pulse scale-110 border-4" : ""
            } `}
            onClick={handlePrimary}
          >
            Primary
          </div>
          <div
            className={`text-xs flex justify-center items-center w-full h-20 bg-gray-300 border border-gray-600 cursor-pointer duration-500 ${
              secondary ? "animate-pulse scale-110 border-4" : ""
            }`}
            onClick={handleSecondary}
          >
            Secondary
          </div>
          <div
            className={`text-xs flex justify-center items-center w-full h-20 bg-gray-200 border border-gray-600 cursor-pointer duration-500 ${
              accent ? "animate-pulse scale-110 border-4" : ""
            }`}
            onClick={handleAccent}
          >
            Accent
          </div>
          <div
            className={`text-xs flex justify-center items-center w-full h-20 bg-gray-100 border border-gray-600 cursor-pointer duration-500 ${
              light ? "animate-pulse scale-110 border-4" : ""
            }`}
            onClick={handleLight}
          >
            Light
          </div>
          <div
            className={`text-xs flex justify-center items-center w-full h-20 bg-gray-50 rounded-b-md border border-gray-600 cursor-pointer duration-500 ${
              dark ? "animate-pulse scale-110 border-4" : ""
            }`}
            onClick={handleDark}
          >
            Dark
          </div>
        </div>
        <div>
          <ChromePicker
            onChange={(e: any) => handleChrome(e)}
            color={chrome.rgb}
            // onChangeComplete={(color) => setChrome(color)}
          />
        </div>
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
