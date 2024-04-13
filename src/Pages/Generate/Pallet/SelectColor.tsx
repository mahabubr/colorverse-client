/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { TiTick } from "react-icons/ti";

const SelectColor = ({
  selectPrimary,
  selectSecondary,
  selectAccent,
  selectLight,
  selectDark,
}: any) => {
  const [primaryCopied, setPrimaryCopied] = useState(false);
  const [secondaryCopied, setSecondaryCopied] = useState(false);
  const [accentCopied, setAccentCopied] = useState(false);
  const [lightCopied, setLightCopied] = useState(false);
  const [darkCopied, setDarkCopied] = useState(false);

  const copyClipboard = (color: any, setCopied: any) => {
    navigator.clipboard.writeText(color);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div>
      <small className="text-xs font-bold border-b-2 ">Selected colors</small>
      <div className="mt-5 space-y-5 h-[50vh] overflow-scroll ">
        {selectPrimary.hex ? (
          <div>
            <h2 className="text-sm font-thin tracking-widest flex gap-2 items-center">
              Primary Code:{" "}
              {primaryCopied ? (
                <TiTick />
              ) : (
                <IoCopyOutline
                  className="cursor-pointer"
                  onClick={() =>
                    copyClipboard(selectPrimary.hex, setPrimaryCopied)
                  }
                />
              )}
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
              Secondary Code:
              {secondaryCopied ? (
                <TiTick />
              ) : (
                <IoCopyOutline
                  className="cursor-pointer"
                  onClick={() =>
                    copyClipboard(selectSecondary.hex, setSecondaryCopied)
                  }
                />
              )}
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
              Accent Code:{" "}
              {accentCopied ? (
                <TiTick />
              ) : (
                <IoCopyOutline
                  className="cursor-pointer"
                  onClick={() =>
                    copyClipboard(selectAccent.hex, setAccentCopied)
                  }
                />
              )}
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
              Light Code:{" "}
              {lightCopied ? (
                <TiTick />
              ) : (
                <IoCopyOutline
                  className="cursor-pointer"
                  onClick={() => copyClipboard(selectLight.hex, setLightCopied)}
                />
              )}
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
              Dark Code:{" "}
              {darkCopied ? (
                <TiTick />
              ) : (
                <IoCopyOutline
                  className="cursor-pointer"
                  onClick={() => copyClipboard(selectDark.hex, setDarkCopied)}
                />
              )}
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
  );
};

export default SelectColor;
