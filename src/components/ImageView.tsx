import React, { ReactNode } from "react";
import { useUnsplash } from "hooks/useUnsplash";
import Loader from "./Loader";

interface ImageViewProps {
  children: ReactNode;
}

function ImageView({ children }: ImageViewProps) {
  const unsplash = useUnsplash();

  return unsplash.status === "loading" ? (
    <div className="min-w-screen min-h-screen flex justify-center items-center">
      <Loader
        size="8rem"
        borderWidth="5px"
        borderColor="#404a53"
        borderTopColor="#fff"
      />
    </div>
  ) : (
    <div
      className="min-h-screen text-white flex items-center justify-center"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url(${
          unsplash.status === "loaded" ? unsplash.payload : ""
        })`,
      }}
    >
      {children}
    </div>
  );
}

export default ImageView;
