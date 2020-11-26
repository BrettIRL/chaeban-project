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
        "h-12 w-32 text-lg font-bold rounded-sm flex justify-center items-center",
        classNames
      )}
      style={{
        backgroundColor: "var(--btn-color)",
        color: "var(--btn-text-color)",
      }}
      onClick={() => history.push("/")}
    >
      <IoArrowBackCircleSharp title="Back Arrow" className="text-2xl mr-2" />
      Back
    </button>
  );
}

export default BackButton;
