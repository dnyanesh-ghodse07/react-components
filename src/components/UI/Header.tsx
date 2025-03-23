import React from "react";
import { FaGithub } from "react-icons/fa";

interface HeaderProps {
  title: string;
  githubLink: string;
}

const Header: React.FC<HeaderProps> = ({ title, githubLink }) => {
  return (
    <div className="flex flex-row gap-2 items-center mb-2 justify-center">
      <h1 className="font-semibold text-xl">{title}</h1>
      <button className="cursor-pointer">
        <a href={githubLink}>
          <FaGithub className="text-2xl" />
        </a>
      </button>
    </div>
  );
};

export default Header;
