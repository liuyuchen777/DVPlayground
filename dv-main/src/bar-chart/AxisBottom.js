export const AxisBottom = ({xScale, innerHeight, tickFormat}) => 
  xScale.ticks().map((tickValue) => (
    <g className="tick" transform={`translate(${xScale(tickValue)}, ${0})`}>
      <line y2={innerHeight} />
      <text y={innerHeight + 3} dy='0.71em' style={{textAnchor: 'middle'}}>
        {tickFormat(tickValue)}
      </text>
    </g>
  ));