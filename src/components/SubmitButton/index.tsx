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
      <IoIosRocket title="rocket-icon" className="mr-2" />
      Launch
    </>
  );

  return (
    <button
      type="submit"
      className="bg-accent h-12 w-full md:w-32 text-white text-lg font-bold rounded-sm flex justify-center items-center mt-1"
    >
      {isLoading ? loader : btnContent}
    </button>
  );
}

export default SubmitButton;
