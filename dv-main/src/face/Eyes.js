const Eye = (props) => (
	<circle
      cx={props.offsetX}
      cy={props.offsetY}
      r={props.radius}
    />
);

export const Eyes = (props) => (
	<g>
  	<Eye offsetX={-1 * props.offsetX} offsetY={-1 * props.offsetY} radius={props.radius}/>
    <Eye offsetX={props.offsetX} offsetY={-1 * props.offsetY} radius={props.radius}/>
  </g>
);