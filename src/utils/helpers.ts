import { GenericObject } from "../types/Home";

export const convertObjectToChartArray = (
  xAxisDataObj: GenericObject,
  yAxisDataObj: GenericObject
) => {
  const result =
    xAxisDataObj &&
    Object.keys(xAxisDataObj).map((date) => [
      +date,
      yAxisDataObj[date] ? +yAxisDataObj[date].toFixed(0) : 0,
    ]);
  return result;
};
