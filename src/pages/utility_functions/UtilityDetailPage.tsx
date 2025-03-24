import { useParams } from "react-router-dom";
import { data } from "./data";

const UtilityDetailPage = () => {
  const { title } = useParams<{ title: string }>();
  console.log(title);

  const content = data.find((item) => item.title?.toLowerCase() === title?.toLowerCase()) || {
    heading: "Utility Not Found",
    description: "The utility you're looking for doesn't exist."
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">{content.description}</h1>
      <p>{content.description}</p>
    </div>
  );
};

export default UtilityDetailPage;
