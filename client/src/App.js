import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navigation/NavBar";
import Home from "./components/home/pages/Home";
import { Signup } from "./components/Signup/Signup";
import { Login } from './components/login/Login';

function App() {
  return (
    <div className="App">
      <Router>
      
        <div className="App">
          <NavBar />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} /> 
            <Route path="/login" element={<Login/>} /> 
          </Routes>
          {/* <Footer /> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
