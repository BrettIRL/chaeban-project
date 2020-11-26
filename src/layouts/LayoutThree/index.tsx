import React from "react";
import moment from "moment";
import GithubLink from "components/GithubLink";
import BackButton from "components/BackButton";

interface LayoutThreeProps {
  date: Date;
  message: string;
}

function LayoutThree({ date, message }: LayoutThreeProps) {
  return (
    <div className="container max-w-screen-xl flex items-center">
      <BackButton classNames="absolute top-4 left-4" />
      <GithubLink classNames="absolute top-4 right-4" />
      <div
        className="w-1/2 border-r-2 flex flex-col items-center"
        style={{ borderColor: "var(--text-color)" }}
      >
        <span className="text-12xl leading-none font-bold mr-4">
          {moment(date).format("DD")}
        </span>
        <div className="text-5xl">
          <div className="block text-center">{moment(date).format("dddd")}</div>
          <div className="block font-bold text-center">
            {moment(date).format("MMMM")}
          </div>
          <div className="block text-center">{moment(date).format("YYYY")}</div>
        </div>
      </div>
      <div className="w-1/2 max-h-4/5 text-2xl overflow-y-auto no-scrollbar whitespace-pre-wrap pl-16">
        {message}
      </div>
    </div>
  );
}

export default LayoutThree;
