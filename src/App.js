import './App.css';
import Home from './Screens/Home/Home';
import {Routes, Route} from "react-router-dom"
import Search from './Screens/Search/Search';
import Login from "./Screens/Login/Login.jsx"
import Signup from "./Screens/Signup/Signup.jsx"
import Navbar from './Components/Navbar';
import Footer from "./Components/Footer"
import Payment from "./Screens/Payment/Payment.jsx"
function App() {
  return (
    <>
    <Navbar />
     <Routes>
       <Route path={"/"} element={<Home />}></Route>
       <Route path={"/Login"} element={<Login />}></Route>
       <Route path={"/Signup"} element={<Signup />}></Route>
       <Route path={"/Search"} element={<Search />}></Route>
       <Route path={"/Payment"} element={<Payment />}></Route>
     </Routes>

    <Footer />
    </>
  );
}

export default App;
