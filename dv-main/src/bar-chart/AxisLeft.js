export const AxisLeft = ({yScale}) => 
  yScale.domain().map((tickValue) => (
    <g className="tick" transform={`translate(${0}, ${yScale(tickValue) + yScale.bandwidth() / 2})`}>
      <text  x={-10} dx='0.32em' style={{textAnchor: 'end'}}>
        {tickValue}
      </text>
    </g>
  ))