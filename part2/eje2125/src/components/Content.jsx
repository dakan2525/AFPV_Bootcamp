import { Part } from "./Part"

export const Content = ({courses}) => {
    let total = 0;
    
    return(
        <ul>
            {
            courses.map((course) => {
                total = total + course.exercises   
                    return (<Part key={course.id} name={course.name} exercises={course.exercises}/>)       
            })
            }
            <br></br>
            <strong><Part name="Total" exercises={total}/></strong>
        </ul>
    )
    }