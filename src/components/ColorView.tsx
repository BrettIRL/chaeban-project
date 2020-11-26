import React, { ReactNode } from "react";
import { Colorway } from "types/ThemeOptions";

interface ColorViewProps {
  children: ReactNode;
  colorway: Colorway;
}

function ColorView({ children, colorway }: ColorViewProps) {
  const bgColor = `rgb(${colorway.bgColor.r}, ${colorway.bgColor.g}, ${colorway.bgColor.b})`;
  const textColor = `rgb(${colorway.textColor.r}, ${colorway.textColor.g}, ${colorway.textColor.b})`;
  const btnColor = `rgb(${colorway.btnColor.r}, ${colorway.btnColor.g}, ${colorway.btnColor.b})`;
  const btnTextColor = `rgb(${colorway.btnTextColor.r}, ${colorway.btnTextColor.g}, ${colorway.btnTextColor.b})`;

  const styles = {
    backgroundColor: bgColor,
    color: textColor,
    "--btn-color": btnColor,
    "--btn-text-color": btnTextColor,
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={styles}
    >
      {children}
    </div>
  );
}

export default ColorView;
