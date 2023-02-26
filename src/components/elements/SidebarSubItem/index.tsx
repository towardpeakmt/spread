import { Link } from "react-router-dom";
// import { openAddWorkspaceModal } from "@/store/slices/routeSlice/routeSlice";
import { RouteType } from "../../../types/routeType/index";

type Props = {
  item: RouteType;
};

const SidebarSubItem = ({ item }: Props) => {
  //   const onAddWorkspace = () => {
  //     dispatch(openAddWorkspaceModal());
  //   };

  if (item.state === "workspace" && item.sidebarProps) {
    return (
      <div
        //   onClick={onAddWorkspace}
        className="flex flex-wrap justify-between items-center pl-12 pr-2 py-2 text-gray-500 cursor-pointer select-none hover:bg-gray-100 hover:text-blue-500"
      >
        <span>{item.sidebarProps.displayText}</span>
        {item.sidebarProps.icon}
      </div>
    );
  }

  return item.sidebarProps && item.path ? (
    <Link to={item.path}>
      <div className="flex flex-wrap items-center pl-12 pr-2 py-2 text-gray-500 cursor-pointer select-none hover:bg-gray-100 hover:text-blue-500">
        {/* {item.sidebarProps.icon && item.sidebarProps.icon} */}
        <span>{item.sidebarProps.displayText}</span>
      </div>
    </Link>
  ) : null;
};

export default SidebarSubItem;
