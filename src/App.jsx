import Home from "./sections/Home";
import Couple from "./sections/Couple";
import Reception from "./sections/Reception";
import Muhurtham from "./sections/Muhurtham";
import Footer from "./sections/Footer";

function App() {
  return (
    <main className="snap-y snap-mandatory">
      <Home />
      <Couple />
      <Reception />
      <Muhurtham />
      <Footer />
    </main>
  );
}

export default App;