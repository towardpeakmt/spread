import ITableHeader from "@components/table/interface/ITableHeader";
import GC from '@grapecity/spread-sheets';
import ITableHeaderDescription from "@components/table/interface/ITableHeaderDescription";
import CellActionHelper from "@components/table/helpers/CellActionHelper";
import Worksheet = GC.Spread.Sheets.Worksheet;
import Workbook = GC.Spread.Sheets.Workbook;
import SheetProtectionHelper from "@components/table/helpers/SheetProtectionHelper";
import ContextMenuHelper from "@components/table/helpers/ContextMenuHelper";
import LightModeHelper from "../helpers/LightModeHelper";

interface HeaderCellEditEndedCallback {
  col: number;
  action: Function;
}

export enum TableFactoryType {
  EMPTY,
  PROJECTS
}

abstract class TableFactory {
  private designer: any;
  private readonly workbook: Workbook;
  private readonly sheet: Worksheet | any;

  private _headers: Array<ITableHeader>;
  private _cellActionHelper: CellActionHelper;
  private _sheetProtectionHelper: SheetProtectionHelper;
  private _contextMenuHelper: ContextMenuHelper;
  private _onHeaderCellEditEndedCallbacks: Array<HeaderCellEditEndedCallback> = [];
  // private _lightModeHelper: LightModeHelper;
  constructor(designer: any, workbook?: any, name?: string) {
    this.designer = designer;
    this.workbook = workbook;

    // this.sheet = new Worksheet(mainSheetName || 'Main');
    // this.workbook.removeSheet(0);
    const num = (name === null || name === undefined) ? 1 : parseInt(name.match(/\d+/g)[0]);
    this.workbook.clearSheets();
    for (let i = 0; i < num; i++)
    {
      const sheet = new Worksheet(`Sheet${i+1}`);
      this.workbook.addSheet(i, sheet);
    }
    this.workbook.setActiveSheetIndex(num-1);
    this.sheet = this.workbook.getActiveSheet();

    this._cellActionHelper = new CellActionHelper(this.workbook, this.sheet);
    this._sheetProtectionHelper = new SheetProtectionHelper(this.workbook, this.sheet);
    this._contextMenuHelper = new ContextMenuHelper(this.workbook, this.sheet);

    // Enable SpreadJS data validating
    this.workbook.options.highlightInvalidData = true;

    // hide tap strip
    this.workbook.options.tabStripVisible = false;

    // Default styles
    this.applyStyling();

    // Processing headers
    this._contextMenuHelper.excludeCommand('columnHeaders');
    this._headers = this.headers()
      .map((header: ITableHeaderDescription, index: number) => ({
        ...header,
        index,
        slug: header.title.toLowerCase()
      }));
    this.applyHeaders();

    this.applyProtects();

    this.bindSheetEvents();

  }

  /**
   * Apply default every table styles.
   * @private
   */
  private applyStyling() {
    this.sheet.suspendPaint();
    this.sheet.defaults.rowHeight = 25;
    this.sheet.defaults.colHeaderRowHeight = 25;
    this.sheet.defaults.colWidth = 165;
    this.sheet.setRowCount(1000, GC.Spread.Sheets.SheetArea.viewport);
    this.sheet.setColumnCount(50, GC.Spread.Sheets.SheetArea.viewport);
    this.sheet.resumePaint();
  }

  /**
   * Apply sheet protection config.
   * https://www.grapecity.com/spreadjs/docs/features/worksheet/celllock
   * @private
   */
  private applyProtects() {
    this._headers
      .filter((header: ITableHeader) => !!header.locked)
      .forEach((header: ITableHeader) => {
        this._sheetProtectionHelper.lockColumn(header.index);
      });
  }

  /**
   * Define table headers and column validators.
   * @protected
   */
  protected abstract headers(): Array<ITableHeaderDescription>;

  /**
   * Apply table headers and column validators.
   * @private
   */
  private applyHeaders() {
    this._headers.forEach((header) => {
      // Header title
      this.sheet.setValue(0, header.index, header.title, GC.Spread.Sheets.SheetArea.colHeader);

      // Push validation event for cell if validator presents
      if (header.validator) {
        this._onHeaderCellEditEndedCallbacks.push({
          col: header.index,
          action: (sender, args) => this._cellActionHelper.createValidationCallback(args, header.validator)
        });
      }
    });
  }

  /**
   * Bind all main sheet events.
   * @private
   */
  private bindSheetEvents() {
    // this.sheet.bind(GC.Spread.Sheets.Events.EditStarting, (sender, args, event) => {
    //   event.preventDefault();
    // });


    this.workbook.bind(GC.Spread.Sheets.Events.EditEnded, (sender, args) => {
      if (args.sheet._id === this.sheet._id) {
        // Process header's validators
        this._onHeaderCellEditEndedCallbacks
          .filter((callback: HeaderCellEditEndedCallback) => callback.col === args.col)
          .forEach((callback: HeaderCellEditEndedCallback) => callback.action(sender, args));
      }
    });
  }
}

export default TableFactory;
