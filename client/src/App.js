import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navigation/NavBar";
import Home from "./components/home/pages/Home";
import Articles from "./components/articles/pages/Articles";
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
            <Route path="/blog" element={<Articles/>} /> 
          </Routes>
          {/* <Footer /> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
