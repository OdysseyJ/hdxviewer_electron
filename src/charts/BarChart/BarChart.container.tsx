import React from 'react';
import BarChartPresenter from './BarChart.presenter';
import c3 from 'c3';

type BarChartContainerProps = {};

const BarChartContainer: React.FC<BarChartContainerProps> = () => {
  React.useEffect(() => {
    c3.generate({
      bindto: '#chart',
      data: {
        columns: [
          ['data1', 30, 200, 100, 400, 150, 250],
          ['data2', 50, 20, 10, 40, 15, 25],
        ],
        type: 'line',
      },
    });
  }, []);

  return <BarChartPresenter />;
};

export default BarChartContainer;
