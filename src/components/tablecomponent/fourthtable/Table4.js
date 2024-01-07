import React, { useRef } from 'react';
import '../AllTable.css';
import TableDatasets from '../../../datasets/TableDatasets';
import * as XLSX from 'xlsx';
import ChartComponent from '../../chart/ChartComponent';


const Table4 = () => {
  const tableref = useRef(null);

  const exportToExcel = () => {
    const ws = XLSX.utils.table_to_sheet(tableref.current);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet 4');
    XLSX.writeFile(wb, 'User_Info4.xlsx');
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
            <th>Student ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>Marks</th>
            <th>Attendence</th>
          </tr>
        </thead>
        <tbody>
          {TableDatasets[3].map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.studentID}</td>
              <td>{data.name}</td>
              <td>{data.course}</td>
              <td>{data.marks}</td>
              <td>{data.attendence}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ChartComponent cat={TableDatasets[3].map((data) => data.name)} name1="Marks" name2="Attendence" data1={TableDatasets[3].map((data) => data.marks)} data2={TableDatasets[3].map((data) => data.attendence)} />
    </div>
  );
};


export default Table4;