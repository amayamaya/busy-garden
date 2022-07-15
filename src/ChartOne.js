import React from 'react';
import { VictoryLine, VictoryChart, VictoryAxis } from 'victory';

const data = [
  { module: 1, CodeCred: 11111 },
  { module: 2, CodeCred: 22222 },
  { module: 3, CodeCred: 33333 },
  { module: 4, CodeCred: 44444 },
];

export default function ChartOne() {
  return (
    <div className="chartOne">
      <VictoryChart domainPadding={5}>
        <VictoryAxis tickValues={[1, 2, 3, 4]} tickFormat={['01', '02', '03', '04']} />
        <VictoryAxis dependentAxis tickFormat={(x) => `${x * 11111}CodeCreds`} />
        <VictoryLine data={data} x="module" y="CodeCred" />
      </VictoryChart>
    </div>
  );
}
