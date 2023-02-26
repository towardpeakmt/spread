import React from "react";
import Table from "@components/table";
import {TableFactoryType} from "@components/table/factory/TableFactory";

const Clients = () => {
  return <div>
    <Table factory={TableFactoryType.EMPTY} />
  </div>;
};

export default Clients;
