import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar"
import Home from "./component/Home";
import Menu from "./component/Menu.js";
import Palceorder from "./component/Place";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/placeorder" element={<Palceorder />} />
        </Routes>
      </BrowserRouter>
   </div>
  );

}

export default App;
