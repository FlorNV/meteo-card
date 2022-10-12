import { Routes, Route } from "react-router-dom";
import "./App.css";
import CardCreation from "./routes/Card/CardCreation";
import Home from "./routes/Home/Home";
import Navigation from "./routes/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card/create" element={<CardCreation />} />
      </Routes>
    </div>
  );
}

export default App;
