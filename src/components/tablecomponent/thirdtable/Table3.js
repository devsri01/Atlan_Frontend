import React, { useRef } from 'react';
import './Table3.css';
import TableDatasets from '../../../datasets/TableDatasets';
import * as XLSX from 'xlsx';
import ChartComponent from '../../chart/ChartComponent';


const Table3 = () => {
  const tableref = useRef(null);

  const exportToExcel = () => {
    const ws = XLSX.utils.table_to_sheet(tableref.current);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet 3');
    XLSX.writeFile(wb, 'User_Info3.xlsx');
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
            <th>Full Name</th>
            <th>Email</th>
            <th>Country</th>
            <th>Bonus</th>
            <th>Expenses</th>
          </tr>
        </thead>
        <tbody>
          {TableDatasets[2].map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.fullName}</td>
              <td>{data.email}</td>
              <td>{data.country}</td>
              <td>{data.bonus}</td>
              <td>{data.expenses}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ChartComponent cat={TableDatasets[2].map((data)=> data.fullName)} name1 = "expenses" name2 = "bonus" data1={TableDatasets[2].map((data)=> data.expenses)} data2={TableDatasets[2].map((data)=> data.bonus)}/>
    </div>
  );
};


export default Table3;