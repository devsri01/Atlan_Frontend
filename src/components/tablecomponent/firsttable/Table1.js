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

  const dataset = TableDatasets[0];

  return (
    <div className="table-container">
      <button className="exportButton" onClick={exportToExcel}>
        Export Data in Excel
      </button>
      <table ref={tableref}>
        <thead>
          <tr>
            {Object.keys(dataset[0]).map((key) => (
              <th key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
        {TableDatasets[0].length>50 ? <div> Too much data to display, please direcly export the data</div> : null}
            {
            dataset.map((data) => (
              <tr key={data.id}>
                {Object.values(data).map((value, index) => (
                  <td key={index}>{value}</td>
                ))}
              </tr>
            ))
          }
        </tbody>
      </table>
      <ChartComponent
        cat={dataset.map((data) => data.name)}
        name1="Age"
        name2="Weight"
        data1={dataset.map((data) => data.age)}
        data2={dataset.map((data) => data.weight)}
      />
    </div>
  );
};

export default Table1;
