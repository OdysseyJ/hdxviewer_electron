import React from 'react';
import c3 from 'c3';
import LineChartPresenter from './LineChart.presenter';

const LineChartContainer: React.FC = () => {
  React.useEffect(() => {
    c3.generate({
      bindto: '#chart_line',
      data: {
        columns: [
          ['data1', 30, 200, 100, 400, 150, 250],
          ['data2', 50, 20, 10, 40, 15, 25],
        ],
        type: 'line',
      },
    });
  }, []);

  return <LineChartPresenter />;
};

export default LineChartContainer;
