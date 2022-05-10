import React, {useState} from 'react';

const AjoutQuestion = () => {
    const [values, setValues] = useState({
        question: '',
        option1: '',
        option2: '',
        option3: '',
        answer: '',
        category: '',
        difficulty: '',
    });

    const [error, setError] = useState(false);
    const handleChange = (prop) => (event) => {
        setError(false);
        setValues({...values, [prop]: event.target.value});
    };

    return (
        <div>
            <h1>Ajout de question</h1>
        </div>
    );
}
export default AjoutQuestion;