import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { RootState } from "@/store";

import Login from "@/components/authItems/login";
import Register from "@/components/authItems/signup";

const SignItem = () => {
  const isAuth = localStorage.getItem("access_token") || null;
  const [openTab, setOpenTab] = React.useState(1);

  if (isAuth) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="flex w-full">
      <div className="w-1/2">
        <div className="flex flex-wrap  w-full content-center justify-center bg-loginBg py-10 h-screen">
          <div className="flex flex-wrap content-center justify-center bg-white w-[430px] shadow-login_shadow rounded-l-round px-8 py-12 ">
            <ul className="flex flex-wrap border-b border-gray-200 w-full">
              <li
                className={
                  "w-1/2  text-center text-18px leading-150%s" +
                  " " +
                  (openTab === 1
                    ? "border-loginBlue border-b-3px "
                    : "text-gray-200")
                }
              >
                <button
                  className={
                    " text-18px leading-150% font-semibold" +
                    " " +
                    (openTab === 1 ? "text-loginBlue" : "text-gray-200")
                  }
                  data-toggle="tab"
                  role="tablist"
                  onClick={() => {
                    setOpenTab(1);
                  }}
                >
                  Log in
                </button>
              </li>
              <li
                className={
                  "w-1/2 text-center text-18px leading-150%" +
                  " " +
                  (openTab === 2
                    ? "border-loginBlue border-b-3px"
                    : "text-gray-200")
                }
              >
                {/* <Link to={"/register"} className="text-gray-200">
                  Sign Up
                </Link> */}
                <button
                  className={
                    " text-18px leading-150% font-semibold" +
                    " " +
                    (openTab === 2 ? "text-loginBlue" : "text-gray-200")
                  }
                  data-toggle="tab"
                  role="tablist"
                  onClick={() => {
                    setOpenTab(2);
                  }}
                >
                  Sign up
                </button>
              </li>
            </ul>
            <div
              className={"w-full" + " " + (openTab === 1 ? "block" : "hidden")}
              id="link1"
            >
              <Login />
            </div>
            <div
              className={"w-full" + " " + (openTab === 2 ? "block" : "hidden")}
              id="link2"
            >
              <Register setOpenTab={() => setOpenTab(1)} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex flex-wrap content-center justify-center rounded-r-md h-screen bg-loginBlue"></div>
    </div>
  );
};

export default SignItem;
