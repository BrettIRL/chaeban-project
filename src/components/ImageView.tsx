import React, { ReactNode } from "react";
import { useUnsplash } from "hooks/useUnsplash";

interface ImageViewProps {
  children: ReactNode;
}

function ImageView({ children }: ImageViewProps) {
  const unsplash = useUnsplash();

  return unsplash.status === "loading" ? (
    <p>Loading</p>
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
