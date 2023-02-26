import React from "react";

export default function Index() {
  return (
    <nav className="flex flex-row items-start p-0 gap-3 h-9 text-sm ml-auto">
      <ul>
        <li className="flex items-center h-9 w-16"> item_1</li>
      </ul>
      {/*User icon*/}
      <div className="flex items-center ml-24 gap-7">
        {/*temporary icon*/}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          className="fill-current hover:text-blue-500"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
        </svg>
        {/*temporary icon*/}
        <img
          src="#"
          className="w-9 h-9 mr-7 rounded-full shadow-lg"
          alt="img"
        />
      </div>
    </nav>
  );
}
