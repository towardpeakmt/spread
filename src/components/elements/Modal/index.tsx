import React, { useEffect, useState, FC, FormEvent } from "react";
import { useAppDispatch } from "@/store";

import { createWorkspaces } from "@/store/slices/workspaceSlice/workspaceSlice";
import apiReq from "@/api/api";
import SvgClose from "@assets/svg/system/Close";
import SvgNewWorkspace from "@assets/svg/system/NewWorkspace";
import "./style.css";

interface ModalProps {
  handleModalClose: () => void;
}

const Modal: FC<ModalProps> = ({ handleModalClose }) => {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState("");
  const [errorSumbit, setErrorSumbit] = useState("");

  useEffect(() => {
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  });

  const onClose = () => {
    handleModalClose();
  };

  const onKeydown = ({ key }: KeyboardEvent) => {
    switch (key) {
      case "Escape":
        onClose();
        break;
    }
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    setErrorSumbit("");
    e.preventDefault();
    if (inputValue.length <= 2) {
      setErrorSumbit("Name is too short (must be more than 3 characters)");
      return;
    }
    apiReq.workspace
      .create({
        name: inputValue,
      })
      .then((res) => {
        dispatch(createWorkspaces(res.data));
        onClose();
      })
      .catch((err) => console.log(err));
  };
  //   const onSubmit = (e: FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     if (!inputValue) return;

  //     const routeObj: RouteType = {
  //       path: inputValue,
  //       element: <div>{inputValue}Page</div>,
  //       state: inputValue,
  //       sidebarProps: {
  //         displayText: inputValue.charAt(0).toUpperCase() + inputValue.slice(1),
  //         // icon: <DevelopmentPageIcon />
  //       },
  //       child: [
  //         {
  //           path: `/${inputValue}/projects`,
  //           element: <div>{inputValue}ProjectsPage</div>,
  //           state: `${inputValue}/projects`,
  //           sidebarProps: {
  //             displayText: "rojects",
  //             // icon: <ProjectsPageIcon />
  //           },
  //         },
  //         {
  //           path: `/${inputValue}/decision`,
  //           element: <div>{inputValue}DecisionPage</div>,
  //           state: `${inputValue}/decision`,
  //           sidebarProps: {
  //             displayText: "Decision Makers",
  //             // icon: <DecisionPageIcon />
  //           },
  //         },
  //         {
  //           path: `/${inputValue}/accounts`,
  //           element: <div>{inputValue}AccountsPage</div>,
  //           state: `${inputValue}/accounts`,
  //           sidebarProps: {
  //             displayText: "Accounts",
  //             // icon: <AccountsPageIcon />
  //           },
  //         },
  //         {
  //           path: `/${inputValue}/clients`,
  //           element: <div>{inputValue}ClientsPage</div>,
  //           state: `${inputValue}/clients`,
  //           sidebarProps: {
  //             displayText: "Clients",
  //             // icon: <ClientsPageIcon />
  //           },
  //         },
  //       ],
  //     };

  //     dispatch(addWorkspace(routeObj));
  //     dispatch(closeAddWorkspaceModal());
  //   };

  return (
    <div
      className="fixed flex top-0 bottom-0 left-0 right-0 w-full z-50 bg-blue-500/10 animation-appear animation-duration-300"
      onClick={onClose}
    >
      <div
        className="p-5 flex flex-col w-96 h-52 mx-auto my-auto overflow-hidden shadow-md bg-white rounded-lg animate-slide-in animation-duration-500"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pt-2 ">
          <h3 className="font-poppins">New Workspace</h3>
          <span className="cursor-pointer ml-auto" onClick={onClose}>
            <SvgClose />
          </span>
        </div>
        <div>
          <form onSubmit={onSubmit}>
            <div className="flex flex-nowrap pt-5 ">
              <SvgNewWorkspace />
              <input
                className="w-full h-9 ml-3 px-3 py-1 text-gray-500 text-14a font-medium bg-white border border-gray-300 rounded-lg :focus outline-gray-300"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
            {errorSumbit && (
              <span className="text-[#E53E3E] text-xs text-center">
                {errorSumbit}
              </span>
            )}
            <div className="flex gap-6 pt-4">
              <button
                className="w-40 h-10 bg-indigo-100 text-14a font-medium text-gray-700 rounded-lg"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                className="w-40 h-10 bg-indigo-500 text-14a font-medium text-white rounded-lg disabled:bg-indigo-100"
                type="submit"
                disabled={inputValue ? false : true}
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
