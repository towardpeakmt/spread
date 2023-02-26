import { useSelector } from "react-redux";
import { useState } from "react";
import Modal from "@components/elements/Modal";
import WorkspaceItem from "@components/elements/Workspace";
import Search from "@components/elements/Search";
import { RootState } from "@/store";

import SvgDoubleIn from "@assets/svg/sidebar/DoubleIn";
import SvgDoubleOut from "@assets/svg/sidebar/DoubleOut";
import SvgPlusCircle from "@assets/svg/sidebar/PlusCircle";
import { Circles } from "react-loader-spinner";

const SidebarView = () => {
  const { workspaceData } = useSelector((state: RootState) => state.workspaces);
  const [open, setOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="border max-w-[240px] border-solid border-gray-300">
      <button
        onClick={handleOpen}
        className={`fixed pt-6 pl-6 z-10 transform transition-all  duration-100 ${
          open ? "" : "pl-1"
        }`}
      >
        {open ? (
          <div className=" flex items-center pr-2 text-gray-500 text-sm font-medium">
            <span className="mr-14">My Workspaces</span>
            <SvgDoubleIn />
          </div>
        ) : (
          <SvgDoubleOut />
        )}
      </button>
      <aside
        className={` z-2 transform transition-all  duration-100 ${
          open ? "-translate-x-0  w-60  " : "-translate-x-full w-0 "
        }`}
      >
        <div
          className={` flex flex-col fixed justify-between w-60 ${
            open ? "block" : "hidden"
          }`}
        >
          <div className="pt-12 pb-6">
            <nav
              aria-label="Main Nav"
              className="flex flex-col text-sm font-medium"
            >
              <div className="pr-4 pl-5">
                <Search
                  onInputChange={(value: string) => setSearchText(value)}
                />
              </div>
              <div
                onClick={() => setIsModalOpen(true)}
                className="flex gap-1 items-center pr-2 pl-5 py-2 text-gray-500 cursor-pointer select-none hover:text-blue-500"
              >
                <button>
                  <SvgPlusCircle />
                </button>
                <span>New Workspace</span>
              </div>
              <WorkspaceItem name={"MyWorkSpace"} uuid={"1123"}/>
              {/* {workspaceData.length ? (
                workspaceData
                  .filter((item) => item.name.includes(searchText))
                  .map((item) => {
                    return <WorkspaceItem key={item.uuid} {...item} />;
                  })
              ) : (
                <div className="h-[300px] flex items-center justify-center">
                  <Circles
                    height="60"
                    width="60"
                    color="#5A6E87"
                    ariaLabel="circles-loading"
                    wrapperClass="items-center justify-center mt-3"
                    visible={true}
                  />
                </div>
              )} */}
            </nav>
          </div>
        </div>
      </aside>
      {isModalOpen && <Modal handleModalClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default SidebarView;
