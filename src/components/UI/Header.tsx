import React from "react";
import { FaArrowLeft, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  title: string;
  githubLink: string;
}

const Header: React.FC<HeaderProps> = ({ title, githubLink }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row gap-2 items-center mb-4 py-2">
      <div className="flex-1">
        <button onClick={() => navigate(-1)} className="flex flex-row items-center gap-2 cursor-pointer">
          <FaArrowLeft />
          Back
        </button>
      </div>
      <div className="flex flex-row gap-2">
        <h1 className="font-semibold text-xl">{title}</h1>
        <button className="cursor-pointer">
          <a href={githubLink}>
            <FaGithub className="text-2xl" />
          </a>
        </button>
      </div>
    </div>
  );
};

export default Header;
