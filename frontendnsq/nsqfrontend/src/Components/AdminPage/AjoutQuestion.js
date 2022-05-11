import React, {useState} from 'react';
import {useHistory} from "react-router-dom/cjs/react-router-dom";
import {TextField} from "@material-ui/core";
import {Button} from "@mui/material";
import ErrorMessageBalise from "../ErrorMessageBalise/ErrorMessageBalise";
import {makeStyles} from "@material-ui/core/styles";
import AddIcon from '@mui/icons-material/Add';

const AjoutQuestion = () => {
    const history = useHistory();
    let quizState;
    quizState = history.location.state.quiz;

    const [values, setValues] = useState({
        question: '',
        option1: '',
        option2: '',
        option3: '',
        answer: '',
    });

    const onSubmit = (QuestionDTO) => {
        if (QuestionDTO.question === "" || QuestionDTO.option1 === "" ||
            QuestionDTO.option2 === "" || QuestionDTO.option3 === "" || QuestionDTO.answer === "") {
            setError(true);
        }
    }
    const [error, setError] = useState(false);
    const handleChange = (prop) => (event) => {
        setError(false);
        setValues({...values, [prop]: event.target.value});
    };

    const useStyles = makeStyles(() => ({
        textField: {
            width: "90%",
            marginTop: 25,
            marginLeft: "5%",
            marginRight: "5%",
        },
    }));

    return (
        <div>
            <h2 className={"text-center my-3 fst-italic text-decoration-underline"}>Ajouter une question</h2>
            {error && <ErrorMessageBalise>Erreur</ErrorMessageBalise>}
            <TextField
                onChange={handleChange('question')}
                label={"Question"}
                className={useStyles().textField}
                variant="outlined"
                style={{marginBottom: 25}}
            />
            <TextField
                onChange={handleChange('option1')}
                label={"Choix 1"}
                variant="outlined"
                className={useStyles().textField}
                style={{marginBottom: 25}}
            />
            <TextField
                onChange={handleChange('option2')}
                label={"Choix 2"}
                variant="outlined"
                className={useStyles().textField}
                style={{marginBottom: 25}}
            />
            <TextField
                onChange={handleChange('option3')}
                label={"Choix 3"}
                variant="outlined"
                className={useStyles().textField}
                style={{marginBottom: 25}}
            />
            <TextField
                floatingLabel={true}
                onChange={handleChange('answer')}
                label={"Bonne réponse"}
                variant="outlined"
                className={useStyles().textField}
                style={{marginBottom: 25}}
            />
            <div className={"d-flex justify-content-center"}>
                <Button
                    variant="contained"
                    style={{marginBottom: 25}}
                    color="primary"
                    endIcon={<AddIcon/>}
                    onClick={() => {
                        onSubmit(values);
                    }}> Ajouter la question 1 </Button>
            </div>
        </div>
    );
}
export default AjoutQuestion;