import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useEffect } from "react";

// import { logOut } from "../store/slices/authSlice/authSlice";
import MainLayout from "@layouts/index";
import Home from "@/pages/Home";
import Login from "@pages/Login";
import Register from "@pages/Register";
import Projects from "@/pages/workspace/Projects";
import DesMakers from "@/pages/workspace/DesMakers";
import Clients from "@/pages/workspace/Clients";
import Accounts from "@/pages/workspace/Accounts";
import WorkSpaces from "@/pages/workspace";

import ProtectedRoute from "./ProtectedRoute";

const AppRouting = () => {
  //   const dispatch = useAppDispatch();
  //   useEffect(() => {
  //     const acc_token = localStorage.getItem("access_token");
  //     if (!acc_token) {
  //       dispatch(logOut());
  //     }
  //   }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route
          path="/"
          element={

              <MainLayout />

          }
        >
          <Route index element={<Home />} />
          {/* workspaces */}
          <Route path="workspace" element={<WorkSpaces />} />
          <Route path="workspace/:id/projects" element={<WorkSpaces />} />
          <Route path="workspace/:id/decision-makers" element={<WorkSpaces />} />
          <Route path="workspace/:id/clients" element={<WorkSpaces />} />
          <Route path="workspace/:id/accounts" element={<WorkSpaces />} />
        </Route>
        {/* page not found */}
        <Route path="*" element={<div>Страница не найдена!</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouting;
