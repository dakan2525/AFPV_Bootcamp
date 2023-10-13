import StatisticLine from "./StatisticLine";

const Statistics = ({feedback}) => {

    const total = () => feedback.good + feedback.neutral + feedback.bad;
    const promedio = () => ((feedback.good - feedback.bad) / total()).toFixed(1);
    const positivas = () => {
        let pos = (feedback.good /total())*100;
        return (pos.toFixed(1) + "%")
    }

    if (feedback.good > 0 | feedback.neutral > 0 | feedback.bad > 0) {
        return (
            <>
                <h2>Statistics</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <StatisticLine name={"Good"} logica={feedback.good}/>
                        <StatisticLine name={"Neutral"} logica={feedback.neutral}/>
                        <StatisticLine name={"Bad"} logica={feedback.bad}/>
                        <StatisticLine name={"All"} logica={total()}/>
                        <StatisticLine name={"Average"} logica={promedio()}/>
                        <StatisticLine name={"Positive"} logica={positivas()}/>
                    </tbody>
                    
                </table>
            </>
            )
    }else {
        return(<p>No feedback given</p>)
    }
}

export default Statistics