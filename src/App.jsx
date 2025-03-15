import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import FormScreen from "./components/FormScreen";
import LoginScreen from "./components/LoginScreen";
import DataScreen from "./components/DataScreen";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<FormScreen/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
