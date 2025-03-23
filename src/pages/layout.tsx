// import React from "react";
// import Files from "../components/Files";
import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  const [sidebarClose, setSidebarClose] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setSidebarClose(false);
    }
  }
  , []);

  return (
    <div className="bg-slate-100 w-screen h-screen flex">
      {sidebarClose && (
        <aside className="min-w-28 p-2 rounded-md shadow">
          <h2 className="text-2xl font-semibold">Dev</h2>
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
        <nav className="bg-slate-200 p-2">
          <button onClick={() => setSidebarClose(!sidebarClose)}>
            {sidebarClose ? (
              <FiChevronLeft size={24} className="bg-white p-1 rounded-full" />
            ) : (
              <FiChevronRight size={24} className="bg-white p-1 rounded-full" />
            )}
          </button>
          <h1>Navbar</h1>
        </nav>
        <main className="p-2">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
