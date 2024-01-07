import React, { useRef } from 'react';
import '../AllTable.css';
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
          {
            Object.keys(TableDatasets[2][0]).map((key)=><th key={key}>{key.charAt(0).toUpperCase()+key.slice(1)}</th>)
          }
          </tr>
        </thead>
        <tbody>
        {TableDatasets[2].length>50 ? <div> Too much data to display, please direcly export the data</div> : null}
          {TableDatasets[2].map((data) => (
            <tr key={data.id}>
            {
              Object.values(data).map((value,index)=><td key={index}>{value}</td>)
            }
            </tr>
          ))}
        </tbody>
      </table>
      <ChartComponent cat={TableDatasets[2].map((data)=> data.fullName)} name1 = "expenses" name2 = "bonus" data1={TableDatasets[2].map((data)=> data.expenses)} data2={TableDatasets[2].map((data)=> data.bonus)}/>
    </div>
  );
};


export default Table3;