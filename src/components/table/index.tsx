import { FC } from 'react';
import "@grapecity/spread-sheets-designer-resources-en";
import { Designer } from "@grapecity/spread-sheets-designer-react";
import "@grapecity/spread-sheets-designer/styles/gc.spread.sheets.designer.min.css";
import "@grapecity/spread-sheets/styles/gc.spread.sheets.excel2013white.css";
import "./index.scss";
import "./formatCells.scss";
import "../../ribbon.css"
import { TableFactoryType } from "@components/table/factory/TableFactory";
import ProjectsTableFactory from "@components/table/factory/ProjectsTableFactory";
import EmptyTableFactory from "@components/table/factory/EmptyTableFactory";

export type TableProps = {
  factory: TableFactoryType
};

const Table: FC<TableProps> = ({ factory }: TableProps) => {

  const onInit = (designer) => {
    switch (factory) {
      case TableFactoryType.EMPTY:
        return new EmptyTableFactory(designer);
      case TableFactoryType.PROJECTS:
        return new ProjectsTableFactory(designer, 'Projects');
      default:
        console.error('No such factory type.');
        break;
    }
  }

  return (
    <div className={`item pt-1 pr-3.5 pb-[9px] pl-[9px] font-['Poppins'] text-[rgba(53,72,102,1)]`}>
      <Designer
        designerInitialized={onInit}
        styleInfo={{
          maxWidth: "calc(100vw)",
          width: "calc(800px)",
          height: "calc(400px)",
        }}
      />
    </div>
  );
}

export default Table;
