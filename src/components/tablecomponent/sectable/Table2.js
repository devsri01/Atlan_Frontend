import React, { useRef } from 'react';
import '../AllTable.css';
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
          {
            Object.keys(TableDatasets[1][0]).map((key)=><th key={key}>{key.charAt(0).toUpperCase()+key.slice(1)}</th>)
          }
          </tr>
        </thead>
        <tbody>
        {TableDatasets[1].length>50 ? <div> Too much data to display, please direcly export the data</div> : null}
          {TableDatasets[1].map((data) => (
            <tr key={data.id}>
            {
              Object.values(data).map((value,index) => <td key={index}>{value}</td>)
            }
            </tr>
          ))}
        </tbody>
      </table>
      <ChartComponent cat={TableDatasets[1].map((data)=> data.firstName)} name1="income" name2="experience" data1={TableDatasets[1].map((data)=> data.income)} data2={TableDatasets[1].map((data)=> data.experience)} />
    </div>
  );
};


export default Table2;