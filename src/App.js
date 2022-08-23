import Home from "./pages/Home";
import Opening from "./pages/Opening";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Opening />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
