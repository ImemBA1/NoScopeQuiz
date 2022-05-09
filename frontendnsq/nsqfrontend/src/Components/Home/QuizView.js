import React, {useEffect} from 'react';
import styles from "./QuizView.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "@material-ui/core";
import {useHistory} from "react-router-dom/cjs/react-router-dom";
import {urlBackend} from "../../service/serviceUtils";
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';

export default function QuizView(props) {
    const [role, setRole] = React.useState("");
    const user = localStorage.getItem('player');
    if (user) {
        const getRole = async () => {
            const response = await fetch(`${urlBackend}/player/${user}`);
            return await response.json();
        }
        useEffect(() => {
            getRole().then(data => {
                setRole(data.role);
            });
        }, []);
    }

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
                            Nb de questions: {quiz.questionsList.length}
                        </p>
                    </div>
                    <div className={`d-flex justify-content-around ${styles.quizDescription}`}>
                        {quiz.description}
                    </div>
                    <div className={"d-flex justify-content-center mt-2"}>
                        {role === "admin" || <>
                            <Button variant="contained"
                                    onClick={() => history.push({
                                        pathname: "/quiz",
                                        state: {quiz: quiz}
                                    })}>
                                Commencer le quiz
                            </Button>
                        </>
                        }
                        {role !== "admin" || <>
                            <Button variant="outlined" endIcon={<AddIcon/>} style={{"marginRight": "10px"}}
                                    onClick={() => history.push({
                                        pathname: "/ajouter_question",
                                        state: {quiz: quiz}
                                    })}>
                                Ajouter une question
                            </Button>

                            <Button variant="outlined" endIcon={<SettingsIcon/>} style={{"marginRight": "10px"}}
                                    onClick={() => history.push({
                                        pathname: "/modifier_quiz",
                                        state: {quiz: quiz}
                                    })}>
                                Modifier
                            </Button>

                            <Button variant="outlined" endIcon={<DeleteIcon/> }
                                    onClick={() => history.push({
                                        pathname: "/supprimer_quiz",
                                        state: {quiz: quiz}
                                    })}>
                                Supprimer
                            </Button>
                        </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}