import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Help from "./components/Help";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Background from "./components/Background";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from "./components/Login";
import Signin from "./components/Signin";
import Booking from "./components/Booking";
import Profile from "./components/Profile";
import { LoggedInProvider } from "./context/Logged";
import Loginas from "./components/Loginas";
import Medco from "./components/Medco";
import ManageInventory from "./components/ManageInventory";
import Order from "./components/Order";

function App() {
  return (
    <div className="App">
      <Router>
      <LoggedInProvider>
        <Navbar />
        <Sidebar />
        <Background/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/help" element={<Help/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/loginas"element={<Loginas/>}></Route>
          <Route path="/medco" element={<Medco/>}></Route>
          <Route path="/manage-inventory" element={<ManageInventory/>}></Route>
          <Route path="/order" element={<Order/>}></Route>
          <Route path="/signin" element={<Signin/>}></Route>
          <Route path="/booking" element={<Booking/>}></Route>
          <Route path="/profile" element={<Profile name={'Name'}/>}></Route>
        </Routes>
        </LoggedInProvider>
      </Router>
    </div>
  );
}

export default App;
