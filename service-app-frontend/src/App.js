import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddService from "./pages/AddService";
import EditService from "./pages/EditService";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <div className="main">
          <div className="page">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/add" element={<AddService />} />
              <Route path="/edit/:id" element={<EditService />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
