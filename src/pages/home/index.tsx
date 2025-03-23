import { FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";

const pages = [
  {
    title: "Components",
    description:
      "A collection of reusable UI components built with React and Tailwind CSS.",
      path: "/components"
  },
  {
    title: "Utilities",
    description:
      "A collection of utility functions and hooks to make your life easier.",
      path: "/utilities"
  },
  {
    title: "Interview Questions",
    description:
      "A collection of common interview questions and answers for frontend developers.",
      path: "/interview-questions"
  },
];

const Card = ({
  title,
  description,
  path
}: {
  title: string;
  description: string;
  path: string
}) => {
  return (
    <Link to={path}>
    <div className="shadow-md p-4 rounded-md">
      <h2>{title}</h2>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
    </Link>
  );
};

const Home = () => {
  return (
    <div className="p-2">
      <div className="flex flex-col items-center my-8">
        <FaReact size={64} className="text-blue-500" />
        <h1 className="text-2xl font-bold my-2 text-center text-blue-800">
          Frontend Interview
        </h1>
      </div>
      <div className="flex md:flex-row flex-col gap-4">
        {pages.map((page, index) => (
          <Card key={index} title={page.title} description={page.description} path={page.path} />
        ))}
      </div>
    </div>
  );
};

export default Home;
