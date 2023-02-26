import React from "react";
import Table from "@components/table";
import {TableFactoryType} from "@components/table/factory/TableFactory";

const Projects = () => {
  return (
    <div>
      <Table factory={TableFactoryType.PROJECTS} />
    </div>
  );
};

export default Projects;
