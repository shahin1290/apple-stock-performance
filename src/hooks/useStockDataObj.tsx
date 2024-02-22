import { GenericObject } from "../pages/home";
import useReadCsv from "./useReadCsv";

const useGetStockDataObj = () => {
  const csvData = useReadCsv();

  const dateWithstockPrices: GenericObject = {};

  csvData?.data &&
    csvData.data.forEach(
      (a) => (dateWithstockPrices[new Date(a.Date).getTime()] = +a.Close)
    );

    return dateWithstockPrices;
};

export default useGetStockDataObj;
