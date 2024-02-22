import { useCallback, useEffect, useState } from "react";
import useGetStockWithNewsObj from "../../../hooks/useStockWithNewsObj";
import Button from "../../../components/Button";
import StatusCard from "./StatusCard";

function ChartTollbar() {
  const [selection1, setSelection1] = useState("");
  const [selection2, setSelection2] = useState("");
  const [month, setMonth] = useState("");
  const [totalNewsCount, setTotalNewsCount] = useState<number>(0);
  const stockDateWithNewsCount = useGetStockWithNewsObj();

  const newsCountWithSelection = useCallback(
    (minTimeStamp: number, maxTimeStamp2: number) => {
      const asArray = Object.entries(stockDateWithNewsCount);
      let counts = 0;
      asArray.forEach(([key, value]) => {
        if (+key >= minTimeStamp && +key <= maxTimeStamp2) {
          counts += value;
        }
      });

      setTotalNewsCount(counts);
    },
    [stockDateWithNewsCount]
  );

  useEffect(() => {
    setSelection1("2023-05-01");
    setSelection2("2023-09-30");
    setMonth("All");
  }, []);

  useEffect(() => {
    const timeStamp1 = new Date(selection1).getTime();
    const timeStamp2 = new Date(selection2).getTime();

    ApexCharts.exec("area-datetime", "zoomX", timeStamp1, timeStamp2);
    newsCountWithSelection(timeStamp1, timeStamp2);
  }, [newsCountWithSelection, selection1, selection2]);

  return (
    <div>
      <div className="flex justify-center gap-2 my-8">
        <Button
          handleClick={() => {
            setSelection1("2023-05-01");
            setSelection2("2023-05-31");
            setMonth("May");
          }}
          title="May"
          selection={month === "May"}
        />
        <Button
          handleClick={() => {
            setSelection1("2023-06-01");
            setSelection2("2023-06-30");
            setMonth("Jun");
          }}
          title="Jun"
          selection={month === "Jun"}
        />
        <Button
          handleClick={() => {
            setSelection1("2023-07-01");
            setSelection2("2023-07-31");
            setMonth("Jul");
          }}
          title="Jul"
          selection={month === "Jul"}
        />
        <Button
          handleClick={() => {
            setSelection1("2023-08-01");
            setSelection2("2023-08-31");
            setMonth("Aug");
          }}
          title="Aug"
          selection={month === "Aug"}
        />
        <Button
          handleClick={() => {
            setSelection1("2023-09-01");
            setSelection2("2023-09-30");
            setMonth("Sep");
          }}
          title="Sep"
          selection={month === "Sep"}
        />
        <Button
          handleClick={() => {
            setSelection1("2023-05-01");
            setSelection2("2023-09-30");
            setMonth("All");
          }}
          title="All"
          selection={month === "All"}
        />
      </div>
      <StatusCard totalNewsCount={totalNewsCount} />
    </div>
  );
}

export default ChartTollbar;
