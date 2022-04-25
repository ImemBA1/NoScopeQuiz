import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PlayerLogin from "./Components/Login/PlayerLogin";
import Navbar from "./Components/Navbar/Navbar";
import PlayerRegister from "./Components/Register/PlayerRegister";
import Home from "./Components/Home/Home";
import Quiz from "./Components/Quiz/Quiz";
import Resultat from "./Components/Resultat/Resultat";
import ListeJoueurs from "./Components/AdminPage/ListeJoueurs";

function App() {
    return (
        <Router>
            <Navbar/>
            {/*<Route path="/" element={<Lobby/>}/>*/}
            <Route path="/home" component={Home}/>
            <Route path="/register" component={PlayerRegister}/>
            <Route path="/login" component={PlayerLogin}/>
            <Route path="/quiz" component={Quiz}/>
            <Route path="/result" component={Resultat}/>
            <Route path="/liste-joueurs" component={ListeJoueurs}/>
        </Router>
    );
}

export default App;


