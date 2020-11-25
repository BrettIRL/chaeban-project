import React from "react";
import { Colorway } from "types/ThemeOptions";

interface ColorSwatchProps {
  colorway: Colorway;
}

function ColorSwatch({ colorway: cw }: ColorSwatchProps) {
  const bgColor = `rgb(${cw.bgColor.r}, ${cw.bgColor.g}, ${cw.bgColor.b})`;
  const textColor = `rgb(${cw.textColor.r}, ${cw.textColor.g}, ${cw.textColor.b})`;
  const btnColor = `rgb(${cw.btnColor.r}, ${cw.btnColor.g}, ${cw.btnColor.b})`;
  const btnTextColor = `rgb(${cw.btnTextColor.r}, ${cw.btnTextColor.g}, ${cw.btnTextColor.b})`;

  return (
    <div className="h-full w-full flex-col">
      <div
        className="h-2/3 flex items-center justify-center"
        style={{ backgroundColor: bgColor }}
      >
        <p className="text-2xl" style={{ color: textColor }}>
          {cw.name}
        </p>
      </div>
      <div
        className="h-1/3 flex items-center justify-center"
        style={{ backgroundColor: btnColor }}
      >
        <p className="text-md uppercase" style={{ color: btnTextColor }}>
          Button
        </p>
      </div>
    </div>
  );
}

export default ColorSwatch;
