import "./App.css";
import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar";
import HomeScreen from "./pages/home";

function App() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto">
        <HomeScreen />
      </main>
      <Footer />
    </>
  );
}

export default App;
