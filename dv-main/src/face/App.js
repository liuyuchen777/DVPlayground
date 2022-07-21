import { Face } from './Face.js';
import { range } from 'd3';

/* smile face */

const FaceExample = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  return <Face 
    width={width}
    height={height}
    centerX={width/2}
    centerY={height/2}
    strokeWidth={height/20}
    eyeOffsetX={height/5}
    eyeOffsetY={height/5}
    eyeRadius={height/10}
    mouthWidth={height/20}
    mouthRadius={height/3}
  />;
};

const SmallFaceExample = () => {
  const width = Math.random() * 100;
  const height = width;

  return <Face 
    width={width}
    height={height}
    centerX={width/2}
    centerY={height/2}
    strokeWidth={height/20}
    eyeOffsetX={height/5}
    eyeOffsetY={height/5}
    eyeRadius={height/10}
    mouthWidth={height/20}
    mouthRadius={height/3}
  />;
};

const array = range(500);

export const App = () => array.map(() => (
  <SmallFaceExample />
));