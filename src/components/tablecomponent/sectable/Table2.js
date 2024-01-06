import React, { useRef } from 'react';
import './Table2.css';
import TableDatasets from '../../../datasets/TableDatasets';
import * as XLSX from 'xlsx';
import ChartComponent from '../../chart/ChartComponent';


const Table2 = () => {
  const tableref = useRef(null);

  const exportToExcel = () => {
    const ws = XLSX.utils.table_to_sheet(tableref.current);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet 2');
    XLSX.writeFile(wb, 'User_Info2.xlsx');
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
            <th>First Name</th>
            <th>Last Name</th>
            <th>EmailAddress</th>
            <th>Income</th>
            <th>Experience</th>
          </tr>
        </thead>
        <tbody>
          {TableDatasets[1].map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.emailAddress}</td>
              <td>{data.income}</td>
              <td>{data.experience}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ChartComponent cat={TableDatasets[1].map((data)=> data.firstName)} name1="income" name2="experience" data1={TableDatasets[1].map((data)=> data.income)} data2={TableDatasets[1].map((data)=> data.experience)} />
    </div>
  );
};


export default Table2;