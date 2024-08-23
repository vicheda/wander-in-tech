import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Apply from "./routes/Apply";
import Contact from "./routes/Contact";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
