import {Button} from "@material-ui/core";
import "./Resultat.css";
import {useHistory} from "react-router-dom/cjs/react-router-dom";
import React from "react";

const Resultat = () => {
    const history = useHistory();
    const score = history.location.state.score;
    const nbQues = history.location.state.nbQues;
    const name = localStorage.getItem('player');

    return (
        <div className="result">
            <span className="title">Score final: {score} / {nbQues}</span>
            <h5>Bravo {name}</h5>
            <div className={"d-flex justify-content-center mt-2"}>
                <Button
                    variant="contained"
                    href="/home">
                    Revenir au menu
                </Button>
            </div>
        </div>
    );
};

export default Resultat;