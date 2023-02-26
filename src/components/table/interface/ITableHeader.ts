import HeaderValidator from "@components/table/validation/HeaderValidator";
import ITableHeaderDescription from "@components/table/interface/ITableHeaderDescription";

export default interface ITableHeader extends ITableHeaderDescription {
  index: number;
  slug: string;
  validator?: HeaderValidator;
  locked?: boolean;
}
