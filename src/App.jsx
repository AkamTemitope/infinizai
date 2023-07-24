import { Route, Routes } from "react-router-dom";
import { Home, Timer, Infinizai } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/timer" element={<Timer />} />
      <Route path="/infinizai" element={<Infinizai />} />
    </Routes>
  );
}

export default App;
