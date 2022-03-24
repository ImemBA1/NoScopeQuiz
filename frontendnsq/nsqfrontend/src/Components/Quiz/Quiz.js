import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom/cjs/react-router-dom";


const Quiz = (quiz) => {
    const history = useHistory();
    const [options, setOptions] = useState([]);
    const [currQues, setCurrQues] = useState(0);

    let listQuestion = [];
    listQuestion = history.location.state.quiz.questionsList;
    console.log(listQuestion);
    useEffect(() => {
        setOptions(listQuestion &&
            shuffle([listQuestion[currQues].option1,
                listQuestion[currQues].option2,
                listQuestion[currQues].option3,
                listQuestion[currQues].answer]));
    }, [currQues, listQuestion]);

    const shuffle = (reponses) => {
        return reponses.sort(() => Math.random() - 0.5);
    };

    return (
        <div>
            <h1>Quiz</h1>
        </div>
    );
};

export default Quiz;