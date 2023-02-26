import { FC } from 'react';
import "@grapecity/spread-sheets-designer-resources-en";
import { Designer } from "@grapecity/spread-sheets-designer-react";
import "@grapecity/spread-sheets-designer/styles/gc.spread.sheets.designer.min.css";
import "@grapecity/spread-sheets/styles/gc.spread.sheets.excel2013white.css";
import "./index.scss";
import "./formatCells.scss";
import "../../ribbon.css"
import { TableFactoryType } from "@components/table/factory/TableFactory";
import GC from '@grapecity/spread-sheets';
import EmptyTableFactory from "@components/table/factory/EmptyTableFactory";
import { LightModeType } from '@/types/lightModeType';

export type ExpertModeTableProps = {
  tables: Array<LightModeType>;
};

const ExpertModeTable: FC<ExpertModeTableProps> = ({ tables }: ExpertModeTableProps) => {

  const onInit = (designer: any, id?: string, name?: string, factory?: TableFactoryType) => {
    const workbook = designer.getWorkbook();

    switch (factory) {
      case TableFactoryType.EMPTY:
        return new EmptyTableFactory(designer, workbook, id);
      default:
        console.error('No such factory type.');
        break;
    }
  }

  return (
    <>
      {
        tables.map((table) => (
          <div key={table.id} id={table.name} className={`item pt-1 pr-3.5 pb-[9px] pl-[9px] font-['Poppins'] text-[rgba(53,72,102,1)]`}>
            <Designer
              designerInitialized={(designer) => onInit(designer, table.id, table.name, table.factory)}
              styleInfo={{
                maxWidth: "calc(100vw)",
                width: "calc(800px)",
                height: "calc(400px)",
              }}
            />
          </div>
        ))
      }
    </>
  );
}

export default ExpertModeTable;
