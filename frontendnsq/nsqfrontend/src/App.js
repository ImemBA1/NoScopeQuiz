import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PlayerLogin from "./Components/Login/PlayerLogin";
import Navbar from "./Components/Navbar/Navbar";
import PlayerRegister from "./Components/Register/PlayerRegister";
import Home from "./Components/Home/Home";

function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/register" element={<PlayerRegister/>}/>
                <Route path="/login" element={<PlayerLogin/>}/>
            </Routes>
        </Router>
    );
}

export default App;


