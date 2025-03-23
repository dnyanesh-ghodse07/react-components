// import React from "react";
// import Files from "../components/Files";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  const [sidebarClose, setSidebarClose] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setSidebarClose(false);
    }else{
      setSidebarClose(true);
    }
  }, []);

  return (
    <div className="bg-slate-100 w-screen h-screen flex">
      {sidebarClose && (
        <aside className="min-w-36 px-2 py-4 rounded-md shadow">
          <h2 className="text-xl font-semibold border-b-1 mb-2">Components</h2>
          <ul className="">
            <li>
              <NavLink to="/file-explorer" className="block p-2">
                Files
              </NavLink>
            </li>
            <li>
              <NavLink to="/pagination" className="block p-2">
                Pagination
              </NavLink>
            </li>
            <li>
              <NavLink to="/star-rating" className="block p-2">
                Star Rating
              </NavLink>
            </li>
            <li>
              <NavLink to="/otp-input" className="block p-2">
                OTP Input
              </NavLink>
            </li>
          </ul>
        </aside>
      )}
      <div className="w-full">
        <nav className="bg-slate-200 p-2 flex flex-row justify-between items-center">
          <button onClick={() => setSidebarClose(!sidebarClose)}>
            {sidebarClose ? (
              <FiChevronLeft size={24} className="bg-white p-1 rounded-full" />
            ) : (
              <FiChevronRight size={24} className="bg-white p-1 rounded-full" />
            )}
          </button>
          <div className="flex flex-row gap-4 items-center">
            
            <a className="flex flex-row gap-1" href="http://www.linkedin.com/in/dnyaneshwar-ghodse">
              <FaLinkedin className="text-2xl" />
              <h1>Dnyanesh Ghodse</h1>
            </a>

            <button className="cursor-pointer">
              <a href="https://github.com/dnyanesh-ghodse07">
                <FaGithub className="text-2xl" />
              </a>
            </button>
          </div>
        </nav>
        <main className="p-2">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
