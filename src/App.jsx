import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormScreen from "./components/FormScreen";
import LoginScreen from "./components/LoginScreen";
import DataScreen from "./components/DataScreen";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/data" element={<DataScreen />} />
      </Routes>
    </Router>
  );
}

export default App;