import { scaleBand, scaleLinear, max } from 'd3';

import { Marks } from './Marks';
import { AxisLeft } from './AxisLeft';
import { AxisBottom } from './AxisBottom';
import { useData } from './useData';

const width = 960;
const height = 500;
const margin = { top: 20, right: 20, bottom: 20, left: 200 };

export const App = () => {
  const data = useData();

  if (!data) {
    return <pre>Loading...</pre>;
  }

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const yValue = d => d.Country;
  const xValue = d => d.Population;

  const yScale = scaleBand()
    .domain(data.map(yValue))
    .range([0, innerHeight]);
  
  const xScale = scaleLinear()
    .domain([0, max(data, xValue)])
    .range([0, innerWidth]);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisBottom xScale={xScale} innerHeight={innerHeight} />
        <AxisLeft yScale={yScale} />
        <Marks data={data} xScale={xScale} yScale={yScale} xValue={xValue} yValue={yValue} />
      </g>
    </svg>
  );
}