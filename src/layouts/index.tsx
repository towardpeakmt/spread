import { FC, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import apiReq from "@/api/api";
import { RootState, useAppDispatch } from "@/store";
import { signOut } from "@/store/slices/authSlice/authSlice";
import { workspaces } from "@/store/slices/workspaceSlice/workspaceSlice";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

const MainLayout: FC = () => {
  const userData = useSelector((state: RootState) => state.auth.userData);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   apiReq.auth
  //     .getUser()
  //     .then((res) => {
  //       dispatch(signOut(res.data));
  //     })
  //     .catch(() => {
  //       console.log(userData);
  //       navigate("/login");
  //     });

  //   apiReq.workspace
  //     .getAll()
  //     .then((res) => {
  //       dispatch(workspaces(res.data));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div>
      <Header />
      <div
        className="flex overflow-hidden"
        style={{ height: "calc(100vh - 64px)" }}
      >
        <Sidebar />
        <main
          className="grow min-h-screen overflow-auto"
          style={{ width: "calc(100% - 240px)" }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
