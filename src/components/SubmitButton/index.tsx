import React from "react";
import { IoIosRocket } from "react-icons/io";

interface SubmitButtonProps {
  isLoading: boolean;
}

function SubmitButton({ isLoading }: SubmitButtonProps) {
  const loader = (
    <div className="loader ease-linear rounded-full border-2 border-t-2 border-accent-light h-5 w-5"></div>
  );

  const btnContent = (
    <>
      <IoIosRocket title="rocket-icon" className="mr-2" />
      Launch
    </>
  );

  return (
    <button
      type="submit"
      className="bg-accent h-12 w-32 text-white text-lg font-bold rounded-sm flex justify-center items-center mt-1"
    >
      {isLoading ? loader : btnContent}
    </button>
  );
}

export default SubmitButton;
