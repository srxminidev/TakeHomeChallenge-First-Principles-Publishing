import "./App.css";
import { NetIncomeChart } from "./Components/NetIncomeChart";
import { TotalShareholderEquity } from "./Components/TotalShareholderEquity";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TotalRevenueChart } from "./Components/TotalRevenueChart";
import { ToggleButtons } from "./Components/Buttons";

function App() {
  return (
    <>
      <Router>
        <div>
          <ToggleButtons />
        </div>
        <Routes>
          <Route path="/" element={<NetIncomeChart />} />
          <Route path="/TotalRevenueCart" element={<TotalRevenueChart />} />
          <Route
            path="/TotalShareholderEquity"
            element={<TotalShareholderEquity />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
