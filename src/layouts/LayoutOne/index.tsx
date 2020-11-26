import React from "react";
import moment from "moment";
import GithubLink from "components/GithubLink";
import BackButton from "components/BackButton";

interface LayoutOneProps {
  date: Date;
  message: string;
}

function LayoutOne({ date, message }: LayoutOneProps) {
  return (
    <div className="container max-w-screen-xl flex flex-col lg:flex-row items-center">
      <BackButton classNames="absolute top-4 left-4" />
      <GithubLink classNames="absolute top-6 lg:top-4 right-4" />
      <div
        className="w-full lg:w-1/2 lg:border-r-2 flex flex-col items-center mt-24 mb-16"
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
      <div className="w-full lg:w-1/2 lg:max-h-4/5 text-lg lg:text-xl xl:text-2xl text-center lg:text-left lg:overflow-y-auto no-scrollbar whitespace-pre-wrap px-4 lg:pl-8 xl:pl-16">
        {message}
      </div>
    </div>
  );
}

export default LayoutOne;
