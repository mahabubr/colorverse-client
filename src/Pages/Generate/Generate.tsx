/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from "react";
import generateColorVariations from "../../utils/generateColorVariatons";
import tinycolor from "tinycolor2";
import Hue from "./Pallet/Hue";
import Heading from "./Pallet/Heading";
import Chrome from "./Pallet/Chrome";
import Block from "./Pallet/Block";
import Pallet from "./Pallet/Pallet";
import SelectColor from "./Pallet/SelectColor";
import Circle from "./Pallet/Circle";
import ColorTags from "./Pallet/ColorTags";
import Compact from "./Pallet/Compact";
import Twitter from "./Pallet/Twitter";
import Sketch from "./Pallet/Sketch";
import Swatches from "./Pallet/Swatches";

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

  const showPrimary = selectPrimary.hex;
  const showSecondary = selectSecondary.hex;
  const showAccent = selectAccent.hex;
  const showLight = selectLight.hex;
  const showDark = selectDark.hex;

  return (
    <section className="container mx-auto w-11/12 my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-20">
        <div>
          <Hue handleColor={handleColor} color={color} />
        </div>
        <div className="text-center">
          <Heading />
        </div>
        <div>
          <Chrome handleColor={handleColor} color={color} />
        </div>
        <div>
          <Block handleColor={handleColor} color={color} />
        </div>
        <div className="w-full h-full">
          <Pallet
            handleAutoComplete={handleAutoComplete}
            handleReset={handleReset}
            primary={primary}
            showPrimary={showPrimary}
            handlePrimary={handlePrimary}
            secondary={secondary}
            showSecondary={showSecondary}
            handleSecondary={handleSecondary}
            accent={accent}
            showAccent={showAccent}
            handleAccent={handleAccent}
            light={light}
            showLight={showLight}
            handleLight={handleLight}
            showDark={showDark}
            dark={dark}
            handleDark={handleDark}
          />
        </div>
        <div className="w-full">
          <SelectColor
            selectPrimary={selectPrimary}
            selectSecondary={selectSecondary}
            selectAccent={selectAccent}
            selectLight={selectLight}
            selectDark={selectDark}
          />
        </div>
        <div>
          <Circle handleColor={handleColor} color={color} />
        </div>
        <div>
          <ColorTags />
        </div>
        <div>
          <Compact handleColor={handleColor} color={color} />
        </div>
        <div>
          <Twitter handleColor={handleColor} color={color} />
        </div>
        <div>
          <Sketch handleColor={handleColor} color={color} />
        </div>
        <div>
          <Swatches handleColor={handleColor} color={color} />
        </div>
      </div>
    </section>
  );
};

export default Generate;
