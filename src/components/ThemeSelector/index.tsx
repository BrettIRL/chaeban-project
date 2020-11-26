import React, { useEffect, useState } from "react";
import cn from "classnames";
import { useColorways, useLayouts } from "hooks/useThemeOptions";
import ThemeOption from "components/ThemeOption";
import ColorSwatch from "components/ColorSwatch";
import CustomColorPicker from "components/CustomColorPicker";
import { Colorway } from "types/ThemeOptions";
import IconOption from "components/IconOption";
import { useFormData } from "hooks/useFormData";

interface ThemeSelectorProps {
  className: string;
  onChange: (theme: { layout: number; colorway: Colorway }) => void;
}

function ThemeSelector({ className, onChange }: ThemeSelectorProps) {
  const state = useFormData();
  const layouts = useLayouts();
  const colorways = useColorways();

  const [selectedLayout, setSelectedLayout] = useState<number>(
    state.data.theme.layout
  );
  const [selectedColorway, setSelectedColorway] = useState<Colorway>(
    state.data.theme.colorway || colorways[0]
  );

  useEffect(() => {
    onChange({ layout: selectedLayout, colorway: selectedColorway });
    //eslint-disable-next-line
  }, [selectedLayout, selectedColorway]);

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
      isSelected={selectedColorway.id === colorway.id}
      onClick={() => setSelectedColorway(colorway)}
      key={colorway.id}
    >
      {colorway.icon ? (
        <IconOption colorway={colorway} />
      ) : (
        <ColorSwatch colorway={colorway} />
      )}
    </ThemeOption>
  ));

  return (
    <div className={cn(className, "text-gray-400")}>
      <h3 className="hidden lg:block">Select a Layout:</h3>
      <div className="hidden lg:flex justify-between my-4">{layoutBlocks}</div>
      <h3>Select a Colorway:</h3>
      <div className="flex justify-between flex-wrap mt-4">{swatches}</div>
      {selectedColorway.name === "Custom" && (
        <>
          <h3>Choose your Colors:</h3>
          <CustomColorPicker
            onChange={(customColors) =>
              setSelectedColorway({ ...selectedColorway, ...customColors })
            }
          />
        </>
      )}
    </div>
  );
}

export default ThemeSelector;
