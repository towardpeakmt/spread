import GC from "@grapecity/spread-sheets";
import Workbook = GC.Spread.Sheets.Workbook;
import Worksheet = GC.Spread.Sheets.Worksheet;
import HeaderValidator from "@components/table/validation/HeaderValidator";

export default class CellActionHelper {
  private workbook: Workbook;
  private sheet: Worksheet;

  constructor(workbook: Workbook, sheet: Worksheet) {
    this.workbook = workbook;
    this.sheet = sheet;

    this.bindEvents();
  }

  /**
   * Build necessary for validation events.
   * @private
   */
  private bindEvents() {
    this.workbook.bind(GC.Spread.Sheets.Events.RangeChanged, (sender, args) => {
      switch (args.action) {
        case GC.Spread.Sheets.RangeChangedAction.clear:
          // Clear cell validation if DELETE key
          this.clearValidation(args.col, args.row);
          break;
        default:
          break;
      }
    });
    this.workbook.bind(GC.Spread.Sheets.Events.EditEnded, (sender, args) => {
      // Clear cell validation before processing
      this.clearValidation(args.col, args.row);
    });
  }

  public createValidationCallback(args, validator) {
    const {col, row, editingText} = args;
    // Validate cell and set styles if invalid or clear validation
    const isInvalid = typeof editingText === 'string' && editingText.length && !validator.validate(editingText);
    isInvalid ? this.setValidation(col, row, validator) : this.clearValidation(col, row);
  }

  public setValidation(col: number, row: number, validator: HeaderValidator) {
    this.sheet.cellStates.add(
      new GC.Spread.Sheets.Range(row, col, 1, 1),
      GC.Spread.Sheets.CellStatesType.dirty,
      validator?.invalidStyle()
    );
  }

  public clearValidation(col: number, row: number) {
    this.sheet.cellStates.clear(new GC.Spread.Sheets.Range(row, col, 1, 1), GC.Spread.Sheets.SheetArea.viewport);
  }
}
