import GC from "@grapecity/spread-sheets";
import Workbook = GC.Spread.Sheets.Workbook;
import Worksheet = GC.Spread.Sheets.Worksheet;

export default class SheetProtectionHelper {
  private workbook: Workbook;
  private sheet: Worksheet | any;

  constructor(workbook: Workbook, sheet: Worksheet) {
    this.workbook = workbook;
    this.sheet = sheet;

    this.bindSheetTabProtection();
  }

  public lockColumn(column: number) {
    // Cancel editing and pasting if cell is in locked header column.
    this.workbook.bind(GC.Spread.Sheets.Events.EditStarting, (sender, args) => {
      if (args.sheet._id === this.sheet._id && args.col === column) {
        args.cancel = true;
      }
    });
    // Cancel pasting if locked column is in selected cell range
    this.workbook.bind(GC.Spread.Sheets.Events.ClipboardPasting, (sender, args) => {
      const {col, colCount} = args.cellRange;
      if (
        args.sheet._id === this.sheet._id
        && column >= col && column <= (col + colCount)
      ) {
        args.cancel = true;
      }
    });
  }

  private bindSheetTabProtection() {
    this.workbook.bind(GC.Spread.Sheets.Events.SheetNameChanging, (sender, args) => {
      // Prevent main sheet name changing
      if (args.sheet._id === this.sheet._id) {
        args.cancel = true;
      }
    });
    this.workbook.bind(GC.Spread.Sheets.Events.SheetChanging, (sender, args) => {
      // Prevent main sheet changing: deleting, disable protecting etc.
      if (args.sheetIndex === this.workbook.getSheetIndex(this.sheet.name())) {
        args.cancel = true;
      }
    });
  }
}
