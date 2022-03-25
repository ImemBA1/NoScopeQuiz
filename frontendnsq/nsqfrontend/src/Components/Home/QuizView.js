import React from 'react';
import styles from "./QuizView.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "@material-ui/core";
import {useHistory} from "react-router-dom/cjs/react-router-dom";

export default function QuizView(props) {
    const {quiz} = props;
    const history = useHistory();
    return (
        <div className={styles.cardHolder}>
            <div className="card">
                <div className="card-body">
                    <h4 className={`d-flex justify-content-around`}>
                        {quiz.titre}
                    </h4>
                    <div className="d-flex justify-content-around">
                        <p>
                            Difficulté: {quiz.difficulte}
                        </p>
                        <p>
                            Catégorie: {quiz.categorie}
                        </p>
                        <p>
                            Nombre de questions: {quiz.questionsList.length}
                        </p>
                    </div>
                    <div className={`d-flex justify-content-around ${styles.quizDescription}`}>
                        {quiz.description}
                    </div>
                    <div className={"d-flex justify-content-center mt-2"}>
                        <Button variant="contained"
                                onClick={() => history.push({
                                    pathname: "/quiz",
                                    state: {quiz: quiz}
                                })}>
                            Commencer le quiz
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}