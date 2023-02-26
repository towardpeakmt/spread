import React, { FC, useState, MouseEvent } from "react";
import {HashLink as Link } from "react-router-hash-link";

import IconDropdown from "@components/elements/IconDropdown";

interface WorkspaceItemProps {
  uuid: string;
  name: string;
  icon: JSX.Element;
  to: string;
}

const WorkspaceItem: FC<WorkspaceItemProps> = ({ uuid, name, icon, to }) => {
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
    setIconDropdownOpen(false);
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="flex flex-wrap gap-2 items-center pr-2 py-2 text-gray-500 cursor-default select-none"
    >
      <div className="relative">
        <span className="cursor-pointer" onClick={(e) => onIconClick(e)}>
          {selectedIcon ? <img src={selectedIcon} alt="icon" /> : <>{icon}</>}
        </span>
        {iconDropdownOpen && (
          <IconDropdown onSelectedIconClick={onSelectedIconClick} />
        )}
      </div>
      <Link onClick={(e) => e.stopPropagation()} to={`workspace/#${name}`}>
        <span className="hover:text-blue-500 cursor-pointer">{name}</span>
      </Link>
    </div>
  );
};

export default WorkspaceItem;
