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
import GC from '@grapecity/spread-sheets';
import EmptyTableFactory from "@components/table/factory/EmptyTableFactory";
import { LightModeType } from '@/types/lightModeType';

export type LightModeTableProps = {
  tables: Array<LightModeType>;
};
type FormulaType = {
  completed?: boolean,
  state?: boolean,
  name?: object,
  workbook?: any,
  row?: number,
  col?: number,
}

const LightModeTable: FC<LightModeTableProps> = ({ tables }: LightModeTableProps) => {
  const designerState: Array<any> = [];
  const Literal: Array<string> = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const workbooks = {};
  const data = {};
  let formula: FormulaType = {};


  function convertSym(col) {
    let re = col % 26;
    let sym = "";
    col = Math.floor(col / 26);
    sym += Literal[re];
    while (col !== 0) {
      sym += Literal[re];
      col = Math.floor(col / 26);
      re = col % 26;
    }
    return sym;
  }

  function makeFun(info, name, num) {
    const colStart = convertSym(info.col);
    const colEnd = convertSym(info.col + info.colCount - 1);
    let newFormula = "";
    if (name !== formula.workbook.name) {
      newFormula = `[${name}.xlsx]Sheet${num}!${colStart}${info.row + 1}:${colEnd}${info.row + info.rowCount},`;
    } else {
      newFormula = `${colStart}${info.row + 1}:${colEnd}${info.row + info.rowCount},`;
    }
    return newFormula
  }


  const onInit = (designer: any, id?: string, name?: string, factory?: TableFactoryType) => {
    const workbook = designer.getWorkbook();
    workbook.suspendPaint();
    workbook.name = id;
    workbook.options.tabStripVisible = false;
    //  workbook.options.scrollbarAppearance = GC.Spread.Sheets.ScrollbarAppearance.mobile;
    const num = (id === null || id === undefined) ? 1 : parseInt(id.match(/\d+/g)[0]);
    designerState.push(designer)
    if (id !== undefined) {
      workbooks[id] = workbook;
    }
    // workbook.setRowCount(3, GC.Spread.Sheets.SheetArea.viewport);
    // if (Object.keys(data).length > 0) {
    //   workbook.fromJSON(JSON.parse(data[Object.keys(data)[0]]));
    // }

    // onInputData(data, workbooks);

    workbook.bind(GC.Spread.Sheets.Events.EnterCell, function (name, info) {
      designerState.forEach(item => {
        item._container.classList.remove('active');
      });
      designer._container.classList.add('active');
      const sheet1 = workbook.toJSON({ includeBindingSource: true }).sheets[`Sheet${num}`];
      // sheet1.name = workbook.name;
      // data[workbook.name] = JSON.stringify(workbook.toJSON({ includeBindingSource: true }));
      data[workbook.name] = JSON.stringify(sheet1);
      // onInputData(data, workbooks);
    });

    workbook.bind(GC.Spread.Sheets.Events.SelectionChanged, function (event, info) {
      if (!formula.completed) {
        if (formula.state && formula.name !== undefined) {
          formula.name[workbook.name] = makeFun(info.newSelections[0], workbook.name, num);
          const sheet = formula.workbook.getActiveSheet();
          let formulaName = Object.keys(formula.name).reduce((final, item) => {
            return final + (formula.name === undefined ? "" : formula.name[item])
          }, "")
          formulaName = formulaName.replace(')', '');
          sheet.setValue(formula.row, formula.col, formulaName.slice(0, formulaName.length - 1));
        }
      } else {
        formula = {};
      }
    })

    workbook.bind(GC.Spread.Sheets.Events.EditEnded, function (e, info) {
      if (info.editingText !== null)
        if (info.editingText.indexOf("=") > -1 && !formula.state) {
          formula = {
            workbook: workbook,
            name: {
              formula: info.editingText
            },
            row: info.row,
            col: info.col,
            state: true,
          }
        }
    })

    workbook.bind(GC.Spread.Sheets.Events.UserFormulaEntered, function (event, info) {
      formula.completed = true;
      const re = /Table\d+(\.xlsx)/g;
      const str = info.formula;
      const myArray = str.match(re);
      if (myArray !== null) {
        if (myArray.length > 0) {
          myArray.map(item => {
            // const workbook1 = designerState[parseInt(item.match(/\d+/i)) - 1].getWorkbook();
            const workbook1 = workbooks[item.split('.')[0]]
            workbook.updateExternalReference(`${item}`, workbook1.toJSON({ includeBindingSource: true }));
          })
        }
      }
    });

    workbook.resumePaint();
    if (designerState.length > 0 && designerState.every(item => !item._container.classList.contains('active'))) {
      designerState[0]._container.classList.add('active');
    }

    switch (factory) {
      case TableFactoryType.EMPTY:
        return new EmptyTableFactory(designer, workbook, id);
      case TableFactoryType.PROJECTS:
        return new ProjectsTableFactory(designer, workbook, id);
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

export default LightModeTable;
