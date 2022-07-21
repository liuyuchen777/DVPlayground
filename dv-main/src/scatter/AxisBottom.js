export const AxisBottom = ({xScale, innerHeight, tickOffset = 15}) => 
  xScale.ticks().map((tickValue) => (
    <g className="tick" transform={`translate(${xScale(tickValue)}, ${0})`}>
      <line y1={innerHeight} />
      <text y={innerHeight + tickOffset} dy='0.71em' style={{textAnchor: 'middle'}}>
        {tickValue}
      </text>
    </g>
  ));