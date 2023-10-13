import { Part } from "./Part"

export const Content = ({parts}) => {

    const total = parts.reduce((count, part) => {
        console.log('what is happening', count, " + ", part.exercises, " = ", count + part.exercises);
        return count + part.exercises
    }, 0);
    
    return(
        <ul>
            {
            parts.map((part) => {  
                    return (<Part key={part.id} name={part.name} exercises={part.exercises}/>)       
            })
            }
            <br></br>
            <strong><Part name="Total" exercises={total}/></strong>
        </ul>
    )
    }