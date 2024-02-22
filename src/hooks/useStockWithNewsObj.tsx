import { GenericObject } from "../types/Home";
import useGetNewsDataObj from "./useNewsDataObj";
import useGetStockDataObj from "./useStockDataObj";

const useGetStockWithNewsObj = () => {
  const dateWithstockPrices = useGetStockDataObj();
  const dateWithNewsCount = useGetNewsDataObj();

  const stockDateWithNewsCount: GenericObject = {};

  dateWithstockPrices &&
    Object.keys(dateWithstockPrices).forEach(
      (date) =>
        (stockDateWithNewsCount[date] = dateWithNewsCount[date]
          ? dateWithNewsCount[date]
          : 0)
    );

  return stockDateWithNewsCount;
};

export default useGetStockWithNewsObj;
