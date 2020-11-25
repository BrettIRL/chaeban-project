import React, { useState } from "react";
import cn from "classnames";
import {
  useColorways,
  useCustomOptions,
  useLayouts,
} from "hooks/useThemeOptions";
import ThemeOption from "components/ThemeOption";
import ColorSwatch from "components/ColorSwatch";

interface ThemeSelectorProps {
  className: string;
}

function ThemeSelector({ className }: ThemeSelectorProps) {
  const [selectedLayout, setSelectedLayout] = useState<number>(1);
  const [selectedColorway, setSelectedColorway] = useState<number>(1);

  const layouts = useLayouts();
  const colorways = useColorways();
  const addOptions = useCustomOptions();

  const layoutBlocks = layouts.map((layout) => (
    <ThemeOption
      isSelected={selectedLayout === layout.id}
      onClick={() => setSelectedLayout(layout.id)}
      key={layout.id}
    >
      <layout.element />
    </ThemeOption>
  ));

  const swatches = colorways.map((colorway) => (
    <ThemeOption
      isSelected={selectedColorway === colorway.id}
      onClick={() => setSelectedColorway(colorway.id)}
      key={colorway.id}
    >
      <ColorSwatch colorway={colorway} />
    </ThemeOption>
  ));

  const moreOptions = addOptions.map((opt) => (
    <ThemeOption
      isSelected={selectedColorway === opt.id}
      onClick={() => setSelectedColorway(opt.id)}
      key={opt.id}
    >
      <div className="h-full w-full text-gray-300 flex flex-col items-center">
        <div className="h-3/4 flex items-center">
          <opt.icon className="text-7xl" />
        </div>
        <p className="h-1/4 text-xl">{opt.name}</p>
      </div>
    </ThemeOption>
  ));

  return (
    <div className={cn(className, "text-gray-400")}>
      <h3>Select a Layout:</h3>
      <div className="flex justify-between my-4">{layoutBlocks}</div>
      <h3>Select a Colorway:</h3>
      <div className="flex justify-between flex-wrap mt-4">
        {swatches}
        {moreOptions}
      </div>
      {selectedColorway === 6 && (
        <>
          <h3>Choose your Colors:</h3>
          <div className="flex mt-4">
            <div className="bg-blue-400 h-36 w-1/4 rounded-md"></div>
            <div className="bg-blue-400 h-36 w-1/4 rounded-md"></div>
            <div className="bg-blue-400 h-36 w-1/4 rounded-md"></div>
            <div className="bg-blue-400 h-36 w-1/4 rounded-md"></div>
          </div>
        </>
      )}
    </div>
  );
}

export default ThemeSelector;
