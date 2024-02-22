import { GenericObject } from "../../types/Home";
import { convertObjectToChartArray } from "../helpers";

const xAxisDataObj: GenericObject = {
  1693519200000: 100,
  1693605600000: 102,
  1693692000000: 102,
};
const yAxisDataObj: GenericObject = {
  1693519200000: 2,
  1693605600001: 24,
  1693692000000: 4,
};
const output1 = [
  [1693519200000, 2],
  [1693605600000, 0],
  [1693692000000, 4],
];
const output2 = [
  [1693519200000, 100],
  [1693605600000, 102],
  [1693692000000, 102],
];

it("converts Object To Chart Array when x-axis and y-axis are different", () => {
  expect(convertObjectToChartArray(xAxisDataObj, yAxisDataObj)).toStrictEqual(
    output1
  );
});
it("converts Object To Chart Array when x-axis and y-axis are same", () => {
  expect(convertObjectToChartArray(xAxisDataObj, xAxisDataObj)).toStrictEqual(
    output2
  );
});
