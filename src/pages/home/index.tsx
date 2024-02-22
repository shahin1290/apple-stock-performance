import Chart from "./components/Chart";
import ChartToolbar from "./components/ChartToolbar";
import IntroText from "./components/IntroText";

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
