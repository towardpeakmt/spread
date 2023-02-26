import TableFactory from "@components/table/factory/TableFactory";
import ITableHeaderDescription from "@components/table/interface/ITableHeaderDescription";

export default class EmptyTableFactory extends TableFactory {
  protected headers(): Array<ITableHeaderDescription> {
    return [];
  }
}
