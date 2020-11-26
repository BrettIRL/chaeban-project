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
      <div className="absolute top-3 left-3 flex items-center">
        <span className="text-12xl leading-none font-bold mr-4">
          {moment(date).format("DD")}
        </span>
        <div className="text-5xl">
          <div className="block">{moment(date).format("dddd")}</div>
          <div className="block font-bold">{moment(date).format("MMMM")}</div>
          <div className="block">{moment(date).format("YYYY")}</div>
        </div>
      </div>
      <div className="text-2xl max-h-3/5 max-w-screen-sm overflow-y-auto no-scrollbar whitespace-pre-wrap">
        {message}
      </div>
      <BackButton classNames="absolute bottom-8" />
      <GithubLink classNames="absolute top-4 right-4" />
    </>
  );
}

export default LayoutTwo;
