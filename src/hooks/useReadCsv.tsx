import Papa, { ParseResult } from "papaparse";
import { useEffect, useState } from "react";

type Data = {
  High: string;
  Low: string;
  Open: string;
  Date: string;
  "Adj Close": string;
  Close: string;
  Volume: string;
};

type Values = {
  data: Data[];
};

const useReadCsv = () => {
  const [values, setValues] = useState<Values | undefined>();

  const getCSV = () => {
    Papa.parse("/apple-stock-performance/AAPL.csv", {
      header: true,
      download: true,
      skipEmptyLines: true,
      delimiter: ",",
      complete: (results: ParseResult<Data>) => {
        setValues(results);
      },
    });
  };
  useEffect(() => {
    getCSV();
  }, []);

  return values;
};

export default useReadCsv;
