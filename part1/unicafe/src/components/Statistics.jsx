const Statistics = ({feedback}) => {

    const total = () => feedback.good + feedback.neutral + feedback.bad;
    const promedio = () => (feedback.good - feedback.bad) / total();
    const positivas = () => (feedback.good /total())*100;

    return (
    <>
        <h2>Statistics</h2>
        <ul>
            <li>Good  {feedback.good}</li>
            <li>Neutral  {feedback.neutral}</li>
            <li>Bad  {feedback.bad}</li>
            <li>All {total()}</li>
            <li>Average {promedio()} </li>
            <li>Positive {positivas()}%</li>
         </ul>
    </>
    )
}

export default Statistics