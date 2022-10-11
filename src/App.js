import "./App.css";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/add" element={<AddContact />} />

        <Route path="/edit/:id" element={<EditContact />} />
      </Routes>
    </div>
  );
};

export default App;
