import React from "react";
import cn from "classnames";
import { useHistory } from "react-router-dom";
import { IoArrowBackCircleSharp } from "react-icons/io5";

interface BackButtonProps {
  classNames?: string;
}

function BackButton({ classNames }: BackButtonProps) {
  const history = useHistory();

  return (
    <button
      className={cn(
        "h-12 w-32 text-lg font-bold focus:outline-none rounded-sm flex justify-center items-center overflow-hidden animate-btn",
        classNames
      )}
      style={{
        backgroundColor: "var(--btn-color)",
        color: "var(--btn-text-color)",
      }}
      onClick={() => history.push("/")}
    >
      <IoArrowBackCircleSharp
        title="Back Arrow"
        className="text-xl absolute left-6"
      />
      <span className="absolute left-14">Back</span>
    </button>
  );
}

export default BackButton;
