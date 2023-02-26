import React, { FC, useState, MouseEvent } from "react";

import { workspaceResponseData } from "@/api/types";
import WorkspaceSubItem from "./WorkspaceSubItem";
import IconDropdown from "../IconDropdown";
import {
  RightIcon,
  LeftIcon,
  Workspace,
  Project,
  Clients,
  Account,
  DesMakers,
} from "@assets/svg/sidebar";

const subItemArray = [
  { name: "Projects", icon: <Project />, to: "projects" },
  { name: "Decision Makers", icon: <DesMakers />, to: "decision-makers" },
  { name: "Accounts", icon: <Account />, to: "accounts" },
  { name: "Clients", icon: <Clients />, to: "clients" },
];

const WorkspaceItem: FC<workspaceResponseData> = ({ name, uuid }) => {
  const [open, setOpen] = useState(true);
  const [iconDropdownOpen, setIconDropdownOpen] = useState(false);
  // selected icon from dropdown
  const [selectedIcon, setSelectedIcon] = useState("");

  const onIconClick = (e: MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    if (!iconDropdownOpen) {
      if (e.detail === 2) {
        setIconDropdownOpen((prev) => !prev);
      }
    } else {
      setIconDropdownOpen((prev) => !prev);
    }
  };
  const onSelectedIconClick = (url: string) => {
    setSelectedIcon(url);
    setIconDropdownOpen(true);
  };

  return (
    <div
      onClick={() => setOpen((prev) => !prev)}
      className="flex flex-wrap justify-between items-center text-gray-500 cursor-pointer select-none hover:bg-gray-100 hover:text-blue-500"
    >
      <div className="flex items-center justify-between w-full pr-2">
        <div className="flex items-center gap-2 pl-5 py-2">
          <div className="relative">
            <span onClick={(e) => onIconClick(e)}>
              {selectedIcon ? (
                <img src={selectedIcon} alt="icon" />
              ) : (
                <Workspace />
              )}
            </span>
            {iconDropdownOpen && (
              <IconDropdown onSelectedIconClick={onSelectedIconClick} />
            )}
          </div>
          <span>{name}</span>
        </div>
        {open ? <LeftIcon /> : <RightIcon />}
      </div>

      {open && (
        <nav
          className={
            "flex w-[238px] pl-11 flex-col text-sm font-medium bg-[#F9FAFB]"
          }
        >
          {subItemArray.map((item, index) => {
            return <WorkspaceSubItem key={index} uuid={uuid} {...item} />;
          })}
        </nav>
      )}
    </div>
  );
};

export default WorkspaceItem;
