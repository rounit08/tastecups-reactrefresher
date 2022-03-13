import "./App.css";
import Body from "./Body/Body";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chicken from "./Soups/Chicken/Chicken";
import Corn from "./Soups/Corn/Corn";
import Lentil from "./Soups/Lentil/Lentil";
import Mushroom from "./Soups/Mushroom/Mushroom";
import Veggie from "./Soups/Veggie/Veggie";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Body />

        <Routes>
          <Route path="/chicken" element={<Chicken />}></Route>
          <Route path="/corn" element={<Corn />}></Route>
          <Route path="/lentil" element={<Lentil />}></Route>
          <Route path="/mushroom" element={<Mushroom />}></Route>
          <Route path="/veggie" element={<Veggie />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
