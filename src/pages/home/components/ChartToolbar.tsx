import { useState } from "react";
import useGetStockWithNewsObj from "../../../hooks/useStockWithNewsObj";
import Button from "../../../components/Button";

function ChartTollbar() {
  const [selection, setSelection] = useState("All");
  const [totalNewsCount, setTotalNewsCount] = useState<number>(657);
  const stockDateWithNewsCount = useGetStockWithNewsObj();

  const newsCountWithSelection = (
    minTimeStamp: number,
    maxTimeStamp2: number
  ) => {
    const asArray = Object.entries(stockDateWithNewsCount);
    let counts = 0;
    asArray.forEach(([key, value]) => {
      if (+key >= minTimeStamp && +key <= maxTimeStamp2) {
        counts += value;
      }
    });

    setTotalNewsCount(counts);
  };

  const updateData = (timeline: string) => {
    setSelection(timeline);
    switch (timeline) {
      case "May":
        ApexCharts.exec(
          "area-datetime",
          "zoomX",
          new Date("2023-05-01").getTime(),
          new Date("2023-05-31").getTime()
        );
        newsCountWithSelection(
          new Date("2023-05-01").getTime(),
          new Date("2023-05-31").getTime()
        );
        break;
      case "Jun":
        ApexCharts.exec(
          "area-datetime",
          "zoomX",
          new Date("2023-06-01").getTime(),
          new Date("2023-06-30").getTime()
        );
        newsCountWithSelection(
          new Date("2023-06-01").getTime(),
          new Date("2023-06-30").getTime()
        );
        break;
      case "Jul":
        ApexCharts.exec(
          "area-datetime",
          "zoomX",
          new Date("2023-07-01").getTime(),
          new Date("2023-07-31").getTime()
        );
        newsCountWithSelection(
          new Date("2023-07-01").getTime(),
          new Date("2023-07-31").getTime()
        );
        break;
      case "Aug":
        ApexCharts.exec(
          "area-datetime",
          "zoomX",
          new Date("2023-08-01").getTime(),
          new Date("2023-08-31").getTime()
        );
        newsCountWithSelection(
          new Date("2023-08-01").getTime(),
          new Date("2023-08-31").getTime()
        );
        break;
      case "Sep":
        ApexCharts.exec(
          "area-datetime",
          "zoomX",
          new Date("2023-09-01").getTime(),
          new Date("2023-09-30").getTime()
        );
        newsCountWithSelection(
          new Date("2023-09-01").getTime(),
          new Date("2023-09-30").getTime()
        );
        break;
      case "All":
        ApexCharts.exec(
          "area-datetime",
          "zoomX",
          new Date("2023-05-01").getTime(),
          new Date("2023-09-30").getTime()
        );
        newsCountWithSelection(
          new Date("2023-05-01").getTime(),
          new Date("2023-09-30").getTime()
        );
        break;
      default:
    }
  };

  return (
    <div>
      <div className="flex justify-center gap-2 my-8">
        <Button
          handleClick={() => updateData("May")}
          title="May"
          selection={selection === "May"}
        />

        <Button
          handleClick={() => updateData("Jun")}
          title="Jun"
          selection={selection === "Jun"}
        />
        <Button
          handleClick={() => updateData("Jul")}
          title="Jul"
          selection={selection === "Jul"}
        />
        <Button
          handleClick={() => updateData("Aug")}
          title="Aug"
          selection={selection === "Aug"}
        />
        <Button
          handleClick={() => updateData("Sep")}
          title="Sep"
          selection={selection === "Sep"}
        />
        <Button
          handleClick={() => updateData("All")}
          title="All"
          selection={selection === "All"}
        />
      </div>
      <div className="flex justify-center">
        <div className="block w-[20rem] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <p className="text-xl font-medium text-gray-700 dark:text-gray-400">
            2023-01-02 to 2023-01-31
          </p>
          <div className="text-2xl mt-4">
            <div>Total News Counts:</div>
            <div className="px-2 font-bold tracking-tight text-gray-900 dark:text-white">
              {totalNewsCount}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChartTollbar;
