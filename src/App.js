import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./Components/Header";
import Home from "./Components/HomePage"
import Cart from "./Components/CartPage"
import Admin from "./Components/Admin"
import Dispatcher from "./Components/Dispatcher";
import User from "./Components/User";
import CheckOut from "./Components/CheckOut";

function App() {
  return (
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/Admin" element={<Admin/>}/>
        <Route path="/Check" element={<CheckOut/>}/>
        <Route path="/User" element={<User/>}/>
        <Route path="/Dispatcher" element={<Dispatcher/>}/>
      </Routes>
    </Router>
  );
}

export default App;
