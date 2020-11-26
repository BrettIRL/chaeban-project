import React from "react";
import cn from "classnames";

interface LoaderProps {
  size: string;
  borderWidth: string;
  borderColor: string;
  borderTopColor: string;
  classNames?: string;
}

function Loader({
  size,
  borderWidth,
  borderColor,
  borderTopColor,
  classNames,
}: LoaderProps) {
  return (
    <div
      style={{
        height: size,
        width: size,
        borderColor,
        borderWidth,
        borderTopColor,
      }}
      className={cn("loader ease-linear rounded-full", classNames)}
    ></div>
  );
}

export default Loader;
