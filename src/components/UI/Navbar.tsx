import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-2 border-b-1 mb-2">
      <h1 className="text-blue-800 text-xl sm:text-2xl font-bold">
        <Link to="/">Frontend Interview</Link>
      </h1>
      <div className="flex flex-row gap-4 items-center">
        <a
          className="flex flex-row gap-1"
          href="http://www.linkedin.com/in/dnyaneshwar-ghodse"
        >
          <FaLinkedin className="text-2xl" />
          <h1>Dnyanesh Ghodse</h1>
        </a>

        {/* <button className="cursor-pointer">
            <a href="https://github.com/dnyanesh-ghodse07">
              <FaGithub className="text-2xl" />
            </a>
          </button> */}
      </div>
    </div>
  );
};

export default Navbar;
