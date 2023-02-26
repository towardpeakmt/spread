import GC from '@grapecity/spread-sheets';
import Worksheet = GC.Spread.Sheets.Worksheet;
import Workbook = GC.Spread.Sheets.Workbook;

export default class ContextMenuHelper {
  private workbook: Workbook;
  private sheet: Worksheet;

  constructor(workbook: Workbook, sheet: Worksheet) {
    this.workbook = workbook;
    this.sheet = sheet;
  }

  public excludeCommand(cmd: Array<string> | string) {
    let list: Array<string> = [];
    if (typeof cmd === 'string') {
      list.push(cmd);
    } else {
      list = [...cmd];
    }
    this.workbook.contextMenu.menuData =
      this.workbook.contextMenu.menuData.filter(item => !list.includes(item.name!));
  }
}
