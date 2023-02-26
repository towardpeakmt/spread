import React from "react";
import "./lightmode.css"
import LightModeTable from "@components/table/LightModeTable";
import { TableFactoryType } from "@components/table/factory/TableFactory";


const tables = [
  {
    id: "Table1",
    name: "Projects",
    factory: TableFactoryType.PROJECTS,
  },
  {
    id: "Table2",
    name: "Decision Makers",
    factory: TableFactoryType.EMPTY,
  },
  {
    id: "Table3",
    name: "Accounts",
    factory: TableFactoryType.EMPTY,
  },
  {
    id: "Table4",
    name: "Clients",
    factory: TableFactoryType.EMPTY,
  },
]
const LightMode = () => {
  return (
    <div className={"wrapper"}>
      <LightModeTable tables={tables} />
      <div className={"h-40 bg-transparent "}></div>
    </div>
  );
};

export default LightMode;
