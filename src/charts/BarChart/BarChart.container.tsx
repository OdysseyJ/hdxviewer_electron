import React from 'react';
import c3 from 'c3';
import BarChartPresenter from './BarChart.presenter';

const BarChartContainer: React.FC = () => {
  React.useEffect(() => {
    c3.generate({
      bindto: '#chart',
      data: {
        columns: [
          ['data1', 30, 200, 100, 400, 150, 250],
          ['data2', 50, 20, 10, 40, 15, 25],
        ],
        type: 'bar',
        types: {
          data1: 'spline',
        },
      },
    });
  }, []);

  return <BarChartPresenter />;
};

export default BarChartContainer;
