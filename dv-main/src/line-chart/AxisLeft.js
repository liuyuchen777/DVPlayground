export const AxisLeft = ({yScale, innerWidth, tickOffset=15}) => 
  yScale.ticks().map((tickValue) => (
    <g className="tick" transform={`translate(${0}, ${yScale(tickValue)})`}>
      <line x2={innerWidth} />
      <text x={-1 * tickOffset} dx='0.32em' style={{textAnchor: 'end'}} y={yScale(tickValue)}>
        {tickValue}
      </text>
    </g>
  ))