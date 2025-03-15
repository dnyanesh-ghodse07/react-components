// import React from "react";
// import Files from "../components/Files";
import {  NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-slate-100 w-screen h-screen flex">
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
            <a href=""></a>
          </li>
        </ul>
      </aside>
      <div className="w-full">
        <nav className="bg-slate-200 p-2">
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
