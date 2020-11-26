import React from "react";
import { Colorway } from "types/ThemeOptions";

interface IconOptionProps {
  colorway: Colorway;
}

function IconOption({ colorway }: IconOptionProps) {
  return (
    <div className="h-full w-full text-gray-300 flex flex-col items-center">
      <div className="h-3/4 flex items-center">
        {colorway.icon && <colorway.icon className="text-7xl" />}
      </div>
      <p className="h-1/4 text-xl">{colorway.name}</p>
    </div>
  );
}

export default IconOption;
