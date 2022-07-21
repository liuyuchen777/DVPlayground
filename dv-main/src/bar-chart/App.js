import { scaleBand, scaleLinear, max, format } from 'd3';

import { Marks } from './Marks';
import { AxisLeft } from './AxisLeft';
import { AxisBottom } from './AxisBottom';
import { useData } from './useData';

const width = 960;
const height = 550;
const margin = { top: 30, right: 20, bottom: 60, left: 200 };
const xAxisLabelOffset = 50;
const xAxisLabelFormat = tickValue => format('.2s')(tickValue).replace('G', 'B');

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
    .range([0, innerHeight])
    .paddingInner(0.2);
  
  const xScale = scaleLinear()
    .domain([0, max(data, xValue)])
    .range([0, innerWidth]);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisBottom xScale={xScale} innerHeight={innerHeight} tickFormat={xAxisLabelFormat} />
        <AxisLeft yScale={yScale} />
        <text 
          className="xAxisLabel" 
          x={innerWidth/2} 
          y={innerHeight + xAxisLabelOffset} 
          textAnchor="middle"
        >
          Population
        </text>
        <Marks 
          data={data} 
          xScale={xScale} 
          yScale={yScale} 
          xValue={xValue} 
          yValue={yValue} 
          tooltipFormat={xAxisLabelFormat} 
        />
      </g>
    </svg>
  );
}