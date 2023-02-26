import { RouteType } from "../../../types/routeType/index";
import { RootState } from "@/store";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SidebarSubItem from "@components/elements/SidebarSubItem";

type Props = {
  item: RouteType;
};

const SidebarItem = ({ item }: Props) => {
  const [open, setOpen] = useState(false);

  //   const { currentState } = useSelector((state: RootState) => state.routeState);

  //   useEffect(() => {
  //     if (currentState.includes(item.state)) {
  //       setOpen(true);
  //     }
  //   }, [currentState, item]);

  return item.sidebarProps ? (
    <>
      <div
        onClick={() => setOpen(!open)}
        className="flex flex-wrap items-center pl-12 pr-2 py-2 text-gray-500 cursor-pointer select-none hover:bg-gray-100 hover:text-blue-500"
      >
        <div>{/*{item.sidebarProps.icon && item.sidebarProps.icon}*/}</div>
        <span className="text-sm font-medium user-select-none">
          {item.sidebarProps.displayText}
        </span>
        {/*{open ? <ExpandLessIcon /> : <ExpandMoreIcon />}*/}
      </div>
      {open && (
        <nav
          className={"flex w-60 flex-col text-sm font-medium pl-4 bg-gray-100"}
        >
          {item.child?.map((route, index) =>
            route.sidebarProps ? (
              route.child ? (
                <SidebarItem item={route} key={index} />
              ) : (
                <SidebarSubItem item={route} key={index} />
              )
            ) : null
          )}
        </nav>
      )}
    </>
  ) : null;
};

export default SidebarItem;
