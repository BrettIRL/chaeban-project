import React, { useState } from "react";
import ColorSwatch from "components/ColorSwatch";
import { Colorway } from "types/ThemeOptions";
import ColorPickerSwatch from "components/ColorPickerSwatch";
import { RGBColor } from "react-color";

type CustomColors = {
  bgColor: RGBColor;
  textColor: RGBColor;
  btnColor: RGBColor;
  btnTextColor: RGBColor;
};

interface CustomColorPickerProps {
  onChange: (color: CustomColors) => void;
}

function CustomColorPicker({ onChange }: CustomColorPickerProps) {
  const [colorway, setColorway] = useState<Colorway>({
    id: 9999,
    name: "Custom",
    bgColor: { r: 247, g: 247, b: 247 },
    textColor: { r: 0, g: 0, b: 0 },
    btnColor: { r: 59, g: 130, b: 246 },
    btnTextColor: { r: 255, g: 255, b: 255 },
  });

  const colorHandler = (key: string, color: RGBColor) => {
    setColorway({ ...colorway, [key]: color });
    const { bgColor, textColor, btnColor, btnTextColor } = colorway;
    onChange({ bgColor, textColor, btnColor, btnTextColor, [key]: color });
  };

  return (
    <div className="flex justify-between">
      <div className="h-40 w-3/10 rounded-md overflow-hidden border-2 border-tertiary mt-4">
        <ColorSwatch colorway={colorway} />
      </div>
      <div className="w-65p mt-4 flex flex-wrap items-center">
        <ColorPickerSwatch
          color={colorway.bgColor}
          label="Background Color"
          onChange={(e) => colorHandler("bgColor", e)}
        />
        <ColorPickerSwatch
          color={colorway.textColor}
          label="Text Color"
          onChange={(e) => colorHandler("textColor", e)}
        />
        <ColorPickerSwatch
          color={colorway.btnColor}
          label="Button Color"
          onChange={(e) => colorHandler("btnColor", e)}
        />
        <ColorPickerSwatch
          color={colorway.btnTextColor}
          label="Button Text Color"
          onChange={(e) => colorHandler("btnTextColor", e)}
        />
      </div>
    </div>
  );
}

export default CustomColorPicker;
