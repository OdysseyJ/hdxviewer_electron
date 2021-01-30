import { ipcRenderer } from 'electron';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import icon from '../assets/icon.svg';
import BarChart from './charts/BarChart';

function readFile(path: string) {
  const rawFile = new XMLHttpRequest();
  rawFile.open('GET', path, false);
  rawFile.onreadystatechange = () => {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status === 0) {
        console.log(rawFile.responseText);
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
    <div>
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        <BarChart />
      </div>
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
