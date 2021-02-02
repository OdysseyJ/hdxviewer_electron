import { ipcRenderer } from 'electron';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { parseString } from 'xml2js';
import BarChart from './charts/BarChart';
import LineChart from './charts/LineChart';

function readFile(path: string) {
  const rawFile = new XMLHttpRequest();
  rawFile.open('GET', path, false);
  rawFile.onreadystatechange = () => {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status === 0) {
        parseString(rawFile.responseText, (err, result) => {
          console.log(result);
        });
      }
    }
  };
  rawFile.send(null);
}

const Hello = () => {
  React.useEffect(() => {
    ipcRenderer.on('FILE_OPEN', (event, arg) => {
      console.log(event);
      console.log(arg);
      readFile(arg[0]);
    });
  }, []);
  return (
    <div style={{ display: 'flex', width: '100vw', height: '100vh' }}>
      <LineChart />
      <BarChart />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
