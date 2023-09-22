import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navigation/NavBar";
import Home from "./components/home/elements/pages/Home";
function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" exact element={<Home />} />
          </Routes>
          {/* <Footer /> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
