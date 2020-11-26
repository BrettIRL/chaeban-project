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
    <div className="container h-screen max-w-screen-xl flex flex-col py-16">
      <BackButton classNames="absolute top-4 left-4" />
      <GithubLink classNames="absolute top-4 right-4" />
      <div
        className="h-1/5 text-9xl text-center border-b-2"
        style={{ borderColor: "var(--text-color)" }}
      >
        {moment(date).format("DD.MM.YY")}
      </div>
      <div className="h-4/5 text-2xl text-center overflow-y-auto no-scrollbar whitespace-pre-wrap p-12">
        {message}
      </div>
    </div>
  );
}

export default LayoutOne;
