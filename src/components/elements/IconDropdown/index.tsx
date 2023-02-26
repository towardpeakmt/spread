import React, { FC } from "react";

import {
  dumpling,
  emodji,
  girl,
  grass,
  heart,
  moon,
  mountain,
  nut,
  panda,
  rose,
  shawerma,
  tree,
} from "@assets/image/wkDropdownImages";

import "./index.scss";

type DataIconType = {
  iconUrl: string;
  iconName: string;
};

const dataIcons: DataIconType[] = [
  {
    iconUrl: dumpling,
    iconName: "dumpling",
  },
  {
    iconUrl: emodji,
    iconName: "emodji",
  },
  {
    iconUrl: girl,
    iconName: "girl",
  },
  {
    iconUrl: grass,
    iconName: "grass",
  },
  {
    iconUrl: heart,
    iconName: "heart",
  },
  {
    iconUrl: moon,
    iconName: "moon",
  },
  {
    iconUrl: mountain,
    iconName: "mountain",
  },
  {
    iconUrl: nut,
    iconName: "nut",
  },
  {
    iconUrl: panda,
    iconName: "panda",
  },
  {
    iconUrl: rose,
    iconName: "rose",
  },
  {
    iconUrl: shawerma,
    iconName: "shawerma",
  },
  {
    iconUrl: tree,
    iconName: "tree",
  },
];

interface IconDropdownProps {
  onSelectedIconClick: (url: string) => void;
}

const IconDropdown: FC<IconDropdownProps> = ({ onSelectedIconClick }) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="iconDropdown absolute inset-0 p-[12px] top-7 w-[188px] h-[132px] rounded-[8px] z-[30] bg-white"
    >
      <input
        className="iconDropdown-input max-w-[100%] pr-2 py-[2px] border border-slate-500 text-[14px] rounded-[8px] placeholder:font-normal"
        type="text"
        placeholder="Search"
      />
      <ul className="flex flex-wrap mt-[16px] gap-x-[4px] gap-y-[16px]">
        {dataIcons.map((item) => {
          return (
            <li
              className="cursor-pointer"
              onClick={() => onSelectedIconClick(item.iconUrl)}
              key={item.iconUrl}
            >
              <img src={item.iconUrl} alt={item.iconName} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default IconDropdown;
