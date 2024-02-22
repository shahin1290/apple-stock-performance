import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import useGetStockDataObj from "../../../hooks/useStockDataObj";
import useGetStockWithNewsObj from "../../../hooks/useStockWithNewsObj";

function Chart() {
    const dateWithstockPrices = useGetStockDataObj();
    const stockDateWithNewsCount = useGetStockWithNewsObj();
    
  const getNewsCountArray = () => {
    const result =
      dateWithstockPrices &&
      Object.keys(dateWithstockPrices).map((date) => [
        +date,
        stockDateWithNewsCount[date] ? stockDateWithNewsCount[date] : 0,
      ]);
    return result;
  };

  const getStockPriceArray = () => {
    const result =
      dateWithstockPrices &&
      Object.keys(dateWithstockPrices).map((date) => [
        +date,
        dateWithstockPrices[date] ? +dateWithstockPrices[date].toFixed(0) : 0,
      ]);
    return result;
  };

  const series = [
    {
      name: "Stock Price",
      type: "area",
      data: getStockPriceArray(),
    },
    {
      name: "News Count",
      type: "line",
      data: getNewsCountArray(),
    },
  ];

  const options: ApexOptions = {
    chart: {
      height: 500,
      type: "line",
      id: "area-datetime",
    },
    stroke: {
      curve: "smooth",
    },
    fill: {
      type: "solid",
      opacity: [0.35, 1],
    },
    xaxis: {
      type: "datetime",
      min: new Date("2023-05-01").getTime(),
      tickAmount: 6,
    },
    tooltip: {
      x: {
        format: "dd MMM yyyy",
      },
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0);
          }
          return y;
        },
      },
    },
    markers: {
      size: 0,
    },
    yaxis: [
      {
        title: {
          text: "Stock Price(dollars)",
        },
      },
      {
        opposite: true,
        title: {
          text: "News Count(numbers)",
        },
      },
    ],
  };

  return (
    <>
      <ReactApexChart
        type="line"
        options={options}
        series={series}
        height={500}
      />
    </>
  );
}

export default Chart;
