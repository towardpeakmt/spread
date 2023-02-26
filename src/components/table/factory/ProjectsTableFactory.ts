import TableFactory from "@components/table/factory/TableFactory";
import ITableHeaderDescription from "@components/table/interface/ITableHeaderDescription";
import DomainHeaderValidator from "@components/table/validation/DomainHeaderValidator";

export default class ProjectsTableFactory extends TableFactory {
  protected headers(): Array<ITableHeaderDescription> {
    return [
      {
        title: 'Status',
        locked: true
      },
      {
        title: 'Manager'
      },
      {
        title: 'Date'
      },
      {
        title: 'Domain',
        validator: new DomainHeaderValidator(),
        // type: new GC.Spread.Sheets.CellTypes.HyperLink()
      },
      {
        title: 'Telegram'
      }
    ].map((header, index) => ({
      ...header,
      index
    }));
  }
}
