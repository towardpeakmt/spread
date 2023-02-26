import GC from "@grapecity/spread-sheets";
import Workbook = GC.Spread.Sheets.Workbook;
import Worksheet = GC.Spread.Sheets.Worksheet;

export default class LightModeHelper {
  private workbook: Workbook;
  private readonly designerState: Array<any>;
  private readonly workbooks: any;
  private designer: any;

  constructor(workbook: Workbook, sheet: Worksheet, name: string , designer, designerState: Array<any>, workbooks: any) {
    this.workbook = workbook;
    this.designerState = designerState;
    this.designer = designer;
    this.bindEvents();
  }

  private bindEvents() {
    this.workbook.bind(GC.Spread.Sheets.Events.EnterCell, (sender, args) => {
      this.designerState.forEach(item => {
        item._container.classList.remove('active');
      });
      this.designer._container.classList.add('active');
    });
  }
}