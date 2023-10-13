import { Header } from "./Header"
import { Content } from "./Content"


export const Course = ({courses}) => {
return(
    <>
        <Header title={courses.name}/>
        <Content courses={courses.parts}/>
    </>
)
}