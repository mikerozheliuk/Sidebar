import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import News from "./pages/News";
import Support from "./pages/Support";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import Performance from "./pages/Performance";
import Transactions from "./pages/Transactions";

import Sidebar from "./components/Sidebar";

import "../src/App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/news" element={<News />} />
            <Route path="/performance" element={<Performance />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/support" element={<Support />} />
            <Route path="/transactions" element={<Transactions />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
