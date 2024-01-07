import React, { useState,useEffect } from 'react';
import Chart from 'react-apexcharts';
import './ChartComponent.css';

const ChartComponent = ({ cat, name1, name2, data1, data2 }) => {
  const [value, setValue] = useState('line');
  const [chartKey, setChartKey] = useState(0);
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const handleSelectChange = (e) => {
    setValue(e.target.value);
    setChartKey(chartKey + 1);
  };

  const [state, setState] = useState({
    options: {
      colors: ['#E91E63', '#FF9800'],
      chart: {
        id: 'basic-bar',
      },
      xaxis: {
        categories: cat,
      },
    },
    series: [
      {
        name: name1,
        data: data1,
      },
      {
        name: name2,
        data: data2,
      },
    ],
  });

  return (
    <div className="chart-container">
      <h1>
        Select Chart <i className="fas fa-user"></i>{' '}
      </h1>
      <select className="chart-options" value={value} onChange={handleSelectChange}>
        <option value="bar">Bar</option>
        <option value="line">Line</option>
        <option value="area">Area</option>
        <option value="radar">Radar</option>
        <option value="scatter">Scatter</option>
        <option value="heatmap">Heatmap</option>
      </select>
      <div className="chart">
        <Chart
          key={chartKey}
          options={state.options}
          series={state.series}
          type={value}
          width={windowSize[0]*0.25+250}
          className="chart-canvas"
        />
      </div>
    </div>
  );
};

export default ChartComponent;
