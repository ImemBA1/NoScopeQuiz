import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PlayerLogin from "./Components/Login/PlayerLogin";
import Navbar from "./Components/Navbar/Navbar";
import PlayerRegister from "./Components/Register/PlayerRegister";
import Home from "./Components/Home/Home";
import Quiz from "./Components/Quiz/Quiz";

function App() {
    return (
        <Router>
            <Navbar/>
            {/*<Route path="/" element={<Lobby/>}/>*/}
            <Route path="/home" component={Home}/>
            <Route path="/register" component={PlayerRegister}/>
            <Route path="/login" component={PlayerLogin}/>
            <Route path="/quiz" component={Quiz}/>
        </Router>
    );
}

export default App;


