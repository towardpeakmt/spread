import React from "react";
import Table from "@components/table";
import {TableFactoryType} from "@components/table/factory/TableFactory";

const DesMakers = () => {
  return <div>
    <Table factory={TableFactoryType.EMPTY} />
  </div>;
};

export default DesMakers;
