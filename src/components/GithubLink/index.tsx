import React from "react";
import cn from "classnames";
import { FiGithub } from "react-icons/fi";

interface GithubLinkProps {
  classNames?: string;
}

function GithubLink({ classNames }: GithubLinkProps) {
  const styles = {
    color: "var(--text-color)",
  };

  return (
    <a
      href={process.env.REACT_APP_GITHUB_URL}
      className={cn(
        "flex items-center cursor-pointer hover-color animate-shake-icon",
        classNames
      )}
      style={styles}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FiGithub title="Github Logo" className="mr-2 text-xl" /> View on Github
    </a>
  );
}

export default GithubLink;
