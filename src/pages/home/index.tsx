import Chart from "./components/Chart";
import ChartToolbar from "./components/ChartToolbar";
import IntroText from "./components/IntroText";

export type GenericObject = Record<string, number>;

function HomeScreen() {
  return (
    <>
      <IntroText />
      <ChartToolbar />
      <Chart />
    </>
  );
}

export default HomeScreen;
