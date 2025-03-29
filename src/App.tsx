import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Missions from "./pages/Missions";
import Character from "./pages/Character";
import Shop from "./pages/Shop";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/character" element={<Character />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  );
}

export default App;
