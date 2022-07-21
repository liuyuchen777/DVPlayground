export const Marks = ({data, xScale, yScale, xValue, yValue, markRadius = 10}) => 
  data.map(d => (
    <circle 
      className="mark"
      cx={xScale(xValue(d))}
      cy={yScale(yValue(d))} 
      r={markRadius}
    >
    </circle>
  ));