import React from 'react';
import ChartOne from './ChartOne';
import ChartTwo from './ChartTwo';
import MyTable from './MyTable';

import './App.css';

export default function App() {
  return (
    <div>
      <div>
        <h1>Chart One</h1>
        <ChartOne />
      </div>
      <div>
        <h1>Chart Two</h1>
        <ChartTwo />
      </div>
      <div>
        <h1>Floral Enthusiasts</h1>
        <MyTable />
      </div>
    </div>
  );
}
