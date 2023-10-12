import Part from "./Part";

const Content = ({parts}) => {
    return (
      <div>
      {parts.map((element, index) => (
        <Part key={index} part={element["name"]} exercises={element["exercises"]} />
      ))}
    </div>
      )
  }

  export default Content;