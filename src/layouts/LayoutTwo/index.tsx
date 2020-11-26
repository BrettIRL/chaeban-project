import React from "react";
import moment from "moment";
import GithubLink from "components/GithubLink";
import BackButton from "components/BackButton";

interface LayoutTwoProps {
  date: Date;
  message: string;
}

function LayoutTwo({ date, message }: LayoutTwoProps) {
  return (
    <>
      <div className="absolute top-20 lg:top-3 lg:left-3 flex items-center">
        <span className="text-9xl lg:text-12xl leading-none font-bold lg:mr-4">
          {moment(date).format("DD")}
        </span>
        <div className="text-3xl lg:text-5xl">
          <div className="block">{moment(date).format("dddd")}</div>
          <div className="block font-bold">{moment(date).format("MMMM")}</div>
          <div className="block">{moment(date).format("YYYY")}</div>
        </div>
      </div>
      <div className="absolute top-56 lg:top-auto lg:relative text-lg lg:text-xl xl:text-2xl text-center lg:text-left max-h-1/2 xl:max-h-3/5 max-w-screen-sm lg:overflow-y-auto no-scrollbar whitespace-pre-wrap px-4 lg:p-0">
        {message}
      </div>
      <BackButton classNames="absolute top-4 left-4 lg:top-auto lg:left-auto bottom-8" />
      <GithubLink classNames="absolute top-6 lg:top-4 right-4" />
    </>
  );
}

export default LayoutTwo;
