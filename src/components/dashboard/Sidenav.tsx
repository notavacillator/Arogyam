import React from "react";
import { Link } from "react-router-dom";

export const Sidenav = () => {
  return (
    <div className=" main-button-card bg-gray-200 w-1/12 h-full rounded-full p-4">
      <ul className=" h-full mx-4 w-20 gap-10 flex  flex-col justify-center align-middle">
        <li>
        <Link to="/dashboard/home">
            <a
              href="#"
              className="block p-4 main-clay-button content-stretch hover:bg-blue-300"
            >
            Home
            </a>
          </Link>
        </li>
        <li>
          <a href="#" className="block p-4 hover:bg-gray-300">
            Tab 2
          </a>
        </li>
        <li>
          <a href="#" className="block p-4 hover:bg-gray-300">
            Tab 3
          </a>
        </li>
        <li>
          <Link to="/dashboard/profile">
            <a
              href="#"
              className="block p-4 main-clay-button content-stretch hover:bg-blue-300"
            >
              profile
            </a>
          </Link>
        </li>
        <li>
          <Link to="/">
            <a
              href="#"
              className="block p-4 main-clay-button content-stretch hover:bg-blue-300"
            >
              logout
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
