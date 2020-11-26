import React, { ReactNode } from "react";
import cn from "classnames";

interface ThemeOptionProps {
  isSelected: boolean;
  children: ReactNode;
  onClick: () => void;
}

function ThemeOption({ isSelected, children, onClick }: ThemeOptionProps) {
  const borderColor = !isSelected ? "border-tertiary" : "border-accent";

  return (
    <div
      className={cn(
        "h-40 w-full md:w-3/10 rounded-md border-2 overflow-hidden mb-4",
        borderColor
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default ThemeOption;
