import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { columns } from './const';

const TableData = ({ users }) => {
  return <DataGrid rows={users} columns={columns} pageSize={6} checkboxSelection />;
};

export default TableData;
