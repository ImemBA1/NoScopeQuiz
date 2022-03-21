const Quizz = () => {
    const {data} = async() => {
        const response = await fetch('http://localhost:8181/quizz');
        return await response.json();
    }
    return (
        <div>
            <h1>Quizz</h1>
        </div>
    );
};