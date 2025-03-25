import { Link } from "react-router-dom";

const components = [
  {
    title: "File Explorer",
    description: "A file explorer component built with React and Tailwind CSS.",
    path: "/components/file-explorer",
  },
  {
    title: "Star Rating",
    description: "A star rating component built with React and Tailwind CSS.",
    path: "/components/star-rating",
  },
  {
    title: "Pagination",
    description: "A pagination component built with React and Tailwind CSS.",
    path: "/components/pagination",
  },
  {
    title: "OTP Input",
    description: "An OTP input component built with React and Tailwind CSS.",
    path: "/components/otp-input",
  },
];

interface ListProps {
  title: string;
  description: string;
  path: string;
}

const List = ({ title, description, path }: ListProps) => {
  return (
    <Link to={path}>
      <div className="shadow-md p-4 rounded-md">
        <h2>{title}</h2>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </Link>
  );
};

const ComponentsPage = () => {
  return (
    <div className="">
      <button>
        <Link to="/">Back</Link>
      </button>
        <h1 className="text-xl font-semibold text-center">Components</h1>
      {components.map((component, index) => (
        <List
          key={index}
          title={component.title}
          description={component.description}
          path={component.path}
        />
      ))}
    </div>
  );
};

export default ComponentsPage;
