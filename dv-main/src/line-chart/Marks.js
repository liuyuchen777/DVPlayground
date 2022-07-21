import { curveNatural, line } from "d3";

export const Marks = ({data, xScale, yScale, xValue, yValue, markRadius=10}) => (
  <g>
    <path
      className="line"
      fill="none"
      stroke="black" 
      d={
        line()
          .x(d => xScale(xValue(d)))
          .y(d => yScale(yValue(d)))
          .curve(curveNatural)  
        (data)
      } 
    />
    {
      data.map(d => (
        <circle 
          className="mark"
          cx={xScale(xValue(d))}
          cy={yScale(yValue(d))} 
          r={markRadius}
        >
        </circle>
      ))
    }
  </g>
);