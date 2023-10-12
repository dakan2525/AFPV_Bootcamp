import Header from "./Header";
import Part from "./Part";
import Content from "./Content";
import Total from "./Total";

const Body = ({parts, course}) => {
    return (
      <div>
        <Header course = {course}/>
        
        <Content parts = {parts} />
  
        <Total parts = {parts} />
        
    </div>
      )
  }

  export default Body;

