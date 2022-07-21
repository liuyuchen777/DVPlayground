import { scaleLinear, extent, timeFormat } from 'd3';

import { Marks } from './Marks';
import { AxisLeft } from './AxisLeft';
import { AxisBottom } from './AxisBottom';
import { useData } from './useData';

const width = 960;
const height = 550;
const margin = { top: 30, right: 20, bottom: 60, left: 200 };

const xAxisLabelOffset = 50;
const xAxisLabel = 'Time';

const yAxisLabelOffset = -100;
const yAxisLabel = 'Temperature';

const xValue = d => d.timestamp;
const yValue = d => d.temperature;

const xAxisTickFormat = timeFormat('%a');

const tickOffset = 15;
const markRadius = 4;

export const App = () => {
  const data = useData();

  if (!data) {
    return <pre>Loading...</pre>;
  }

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;
  
  const xScale = scaleLinear()
    .domain(extent(data, xValue))
    .range([0, innerWidth])
    .nice();

  const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([innerHeight, 0])
    .nice();

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisBottom xScale={xScale} innerHeight={innerHeight} tickOffset={tickOffset} tickFormat={xAxisTickFormat}/>
        <AxisLeft yScale={yScale} innerWidth={innerWidth} tickOffset={tickOffset} />
        <text 
          className="xAxisLabel" 
          x={innerWidth/2} 
          y={innerHeight + xAxisLabelOffset} 
          textAnchor="middle"
        >
          {xAxisLabel}
        </text>
        <text 
          className="yAxisLabel" 
          x={yAxisLabelOffset} 
          y={innerHeight/2} 
          textAnchor="middle"
        >
          {yAxisLabel}
        </text>
        <Marks 
          data={data} 
          xScale={xScale} 
          yScale={yScale} 
          xValue={xValue} 
          yValue={yValue} 
          markRadius={markRadius}
        />
      </g>
    </svg>
  );
}