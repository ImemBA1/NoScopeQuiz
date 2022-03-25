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
            <h5 >Bravo {name}</h5>
            <Button
                variant="contained"
                color="primary"
                size="large"
                style={{alignSelf: "center", marginTop: 20}}
                href="/home"
            >
                Revenir au menu
            </Button>
        </div>
    );
};

export default Resultat;