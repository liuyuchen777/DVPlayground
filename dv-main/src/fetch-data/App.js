import { csvFormat, csv } from "d3";
import { useState, useEffect } from "react";

/* read data with d3 */

const message = data => {
  let message = '';
  message += data.length + ' rows\n';
  message += data.columns.length + ' columns\n';
  message += Math.round(csvFormat(data).length / 1024) + ' KB\n';

  return message;
};

export const App = () => {
  const url = "https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv";
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(url).then(data => {
      console.log("fetch data");
      setData(data);
    });
  }, []);

  return <pre>{data ? message(data) : 'loading'}</pre>;
}