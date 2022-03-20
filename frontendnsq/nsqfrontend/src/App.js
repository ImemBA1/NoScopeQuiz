import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PlayerLogin from "./Components/Login/PlayerLogin";
import Navbar from "./Components/Navbar/Navbar";

function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                {/*<Route exact path="/lobby" component={Lobby}/>*/}
                {/*<Route exact path="/admin" component={AdminLogin}/>*/}
                <Route path="/" element={<PlayerLogin/>}/>
            </Routes>
        </Router>
    );
}

export default App;


