import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AdminLogin from "../src/Components/Login/AdminLogin";
import Home from "./Components/Home/Home";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/*<Route path="/" element={<Home/>}/>*/}
                {/*<Route path="/LoginPlayer" element={<PlayerLogin/>}/>*/}
                <Route path="/" element={<AdminLogin/>}/>
            </Routes>

        </BrowserRouter>

    );
}

export default App;


