import { Link } from "react-router-dom";
import { data } from "./data";

interface ListProps {
  title: string;
  description: string;
}

const List = ({ title, description }: ListProps) => {
  const formattedTitle = title.toLowerCase().replace(/ /g, "-");
  return (
    <Link to={`/utility_functions/${formattedTitle}`}>
    <div className="mb-4 shadow-md p-4 rounded-md">
      <h3 className="font-semibold">{title}</h3>
      <p>{description}</p>
    </div>
    </Link>
  );
};

const Utilities = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Utilities</h1>
      <div>
        {data.map((item) => (
          <List
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Utilities;
