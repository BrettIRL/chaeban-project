import React from "react";
import Loader from "components/Loader";
import { IoIosRocket } from "react-icons/io";

interface SubmitButtonProps {
  isLoading: boolean;
}

function SubmitButton({ isLoading }: SubmitButtonProps) {
  const loader = (
    <Loader
      size="1.25rem"
      borderWidth="2px"
      borderColor="#8cd582"
      borderTopColor="#fff"
    />
  );

  const btnContent = (
    <>
      <IoIosRocket
        title="rocket-icon"
        className="text-xl absolute left-28 sm:left-64 md:left-4"
      />
      <span className="absolute left-34 sm:left-72 md:left-11">Launch</span>
    </>
  );

  return (
    <button
      type="submit"
      className="bg-accent h-12 w-full md:w-32 text-white text-lg font-bold relative rounded-sm focus:outline-none flex justify-center items-center overflow-hidden mt-1 animate-btn"
    >
      {isLoading ? loader : btnContent}
    </button>
  );
}

export default SubmitButton;
