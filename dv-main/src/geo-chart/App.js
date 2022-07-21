import { Marks } from './Marks';
import { useData } from './useData';

const width = 1000;
const height = 550;

export const App = () => {
  const data = useData();

  if (!data) {
    return <pre>Loading...</pre>;
  }

  return (
    <svg width={width} height={height}>
      <Marks data={data} />
    </svg>
  );
}