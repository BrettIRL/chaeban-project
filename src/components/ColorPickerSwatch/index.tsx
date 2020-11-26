import React, { useState } from "react";
import { ColorResult, RGBColor, TwitterPicker } from "react-color";

interface ColorPickerSwatchProps {
  color: RGBColor;
  label: string;
  onChange: (color: RGBColor) => void;
}

function ColorPickerSwatch({ color, label, onChange }: ColorPickerSwatchProps) {
  const [showPicker, setShowPicker] = useState<boolean>(false);
  const colorStr = `rgb(${color.r}, ${color.g}, ${color.b})`;

  const handleChange = (color: ColorResult) => {
    onChange(color.rgb);
    setShowPicker(false);
  };

  return (
    <div className="w-1/2 relative">
      <label className="flex items-center ">
        <div
          className="h-8 w-16 rounded-sm bg-white border-2 border-tertiary p-1 mr-2 cursor-pointer"
          onClick={() => setShowPicker(!showPicker)}
        >
          <div
            className="h-full w-full rounded-sm"
            style={{ backgroundColor: colorStr }}
          ></div>
        </div>
        {label}
      </label>
      {showPicker && (
        <div className="absolute z-10 top-12 left-3 h-16 w-16">
          <TwitterPicker color={color} onChangeComplete={handleChange} />
        </div>
      )}
    </div>
  );
}

export default ColorPickerSwatch;
