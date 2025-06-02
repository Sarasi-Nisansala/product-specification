import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import BookARepair from "./pages/bookARepair";
import Home from "./pages/Home";
import RepairHistoryPage from "./pages/repairHistory";

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/repair/:productId" element={<BookARepair />} />
                <Route path="/repairHistory/:productId" element={<RepairHistoryPage />} />
            </Routes>
        </Router>
    );
}

export default App;