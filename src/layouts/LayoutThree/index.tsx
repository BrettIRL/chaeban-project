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
    <div className="container h-screen max-w-screen-xl flex flex-col py-16">
      <BackButton classNames="absolute top-4 left-4" />
      <GithubLink classNames="absolute top-6 lg:top-4 right-4" />
      <div
        className="h-1/5 text-6xl md:text-8xl lg:text-9xl text-center border-b-2 mt-8 lg:mt-0"
        style={{ borderColor: "var(--text-color)" }}
      >
        {moment(date).format("DD.MM.YY")}
      </div>
      <div className="h-4/5 text-lg lg:text-xl xl:text-2xl text-center overflow-y-auto no-scrollbar whitespace-pre-wrap p-4 lg:p-12">
        {message}
      </div>
    </div>
  );
}

export default LayoutThree;
