import React, { useRef } from 'react';
import '../AllTable.css';
import TableDatasets from '../../../datasets/TableDatasets';
import * as XLSX from 'xlsx';
import ChartComponent from '../../chart/ChartComponent';


const Table1 = () => {
  const tableref = useRef(null);

  const exportToExcel = () => {
    const ws = XLSX.utils.table_to_sheet(tableref.current);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet 1');
    XLSX.writeFile(wb, 'User_Info1.xlsx');
  };

  return (
    <div className="table-container">
      <button className="exportButton" onClick={exportToExcel}>
        Export Data in Excel
      </button>
      <table ref={tableref}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Weight in kg</th>
          </tr>
        </thead>
        <tbody>
          {TableDatasets[0].map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.age}</td>
              <td>{data.weight}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ChartComponent cat={TableDatasets[0].map((data) => data.name)} name1="Age" name2="Weight" data1={TableDatasets[0].map((data) => data.age)} data2={TableDatasets[0].map((data) => data.weight)} />
    </div>
  );
};


export default Table1;