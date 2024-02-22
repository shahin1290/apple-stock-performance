import "./App.css";
import { Navbar } from "./components/Navbar";
import HomeScreen from "./pages/home";

function App() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto">
        <HomeScreen />
      </main>
    </>
  );
}

export default App;
